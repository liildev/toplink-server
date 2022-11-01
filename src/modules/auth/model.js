import { fetch } from "../../libs/toplink.db.js";
import model from "./query.js";

const CHECK_EMAIL = async (email) => {
  try {
    return await fetch(model.CHECK_EMAIL, email);
  } catch (error) {
    console.error(error);
  }
};

const CHECK_USERNAME = async (username) => {
  try {
    return await fetch(model.CHECK_USERNAME, username);
  } catch (error) {
    console.error(error);
  }
};

const REGISTER = async (fullName, username, email, password, number) => {
  try {
    return await fetch(
      model.REGISTER,
      fullName,
      username,
      email,
      password,
      number
    );
  } catch (error) {
    console.error(error);
  }
};

const LOGIN = async (email, password) => {
  try {
    return await fetch(model.LOGIN, email, password);
  } catch (error) {
    console.error(error);
  }
};

export { REGISTER, CHECK_EMAIL, CHECK_USERNAME, LOGIN };
