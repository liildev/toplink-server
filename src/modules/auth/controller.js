import ApiError from "../../errors/api.error.js";
import JWT from "../../libs/jwt.generator.js";
import { REGISTER, CHECK_EMAIL, CHECK_USERNAME, LOGIN } from "./model.js";

class AuthController {
  async REGISTER(req, res, next) {
    try {
      const { fullName, username, email, password, number } = req.body;

      const candidate = await CHECK_EMAIL(email);
      const candidate2 = await CHECK_USERNAME(username);

      if (candidate) {
        return next(ApiError.badRequest("This email is already exist"));
      }

      if (candidate2) {
        return next(ApiError.badRequest("This username is already exist"));
      }

      const user = await REGISTER(fullName, username, email, password, number);

      const payload = {
        id: user.user_id,
        name: user.full_name,
        email: user.email,
        username: user.user_name,
      };

      if (user) {
        res.status(201).json({
          status: 201,
          token: JWT.sign(payload),
        });
      } else {
        return next(ApiError.badRequest("Client error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async LOGIN(req, res, next) {
    try {
      const { email, password } = req.body;
      const checkUser = await CHECK_EMAIL(email);

      if (!checkUser) {
        return next(ApiError.badRequest("User with given email doesn't exist"));
      }
      const user = await LOGIN(email, password);

      if (!user) {
        return next(ApiError.badRequest("Wrong password"));
      }

      const payload = {
        id: user.user_id,
        name: user.full_name,
        email: user.email,
        username: user.user_name,
      };

      if (user) {
        res.status(200).json({
          status: 200,
          token: JWT.sign(payload),
        });
      } else {
        return next(ApiError.unauthorized("Wrong username or password"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

export default new AuthController();
