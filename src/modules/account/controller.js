import ApiError from "../../errors/api.error.js";
import JWT from "../../libs/jwt.generator.js";
import { sendEmail } from "../../utils/send.mail.js";
import { CHECK_EMAIL, CHECK_ID, CHANGE_PASSWORD } from "./model.js";

class UsersController {
  async FORGOT(req, res, next) {
    const { email } = req.body;

    const checkUser = await CHECK_EMAIL(email);

    if (!checkUser) {
      return next(ApiError.badRequest("User with given email doesn't exist"));
    }

    const payload = {
      id: checkUser.user_id,
      email: checkUser.email,
    };

    const token = JWT.sign(payload);

    const link = `https://top-link-app.vercel.app/reset/${checkUser.user_id}/${token}`;

    await sendEmail(checkUser.email, "Password reset", link);

    res.status(200).json({
      message: "Password reset link sent to your email account",
    });
  }

  async RESET(req, res, next) {
    let { id, token } = req.params;

    const user = JWT.verify(token);

    const checkUser = await CHECK_ID(id);

    if (user.id !== checkUser?.user_id) {
      return next(ApiError.badRequest("Invalid link or expired"));
    }

    await CHANGE_PASSWORD(req.body.password, id);

    res.status(200).json({
      message: "Password reset sucessfully",
    });
  }
}

export default new UsersController();
