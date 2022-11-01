import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: true,
      auth: {
        user: "mansurov.jr2000@gmail.com",
        pass: "imogirzltqwgceix",
      },
    });

    await transporter.sendMail({
      from: "toplink",
      to: email,
      subject: subject,
      text: text,
    });

    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};
