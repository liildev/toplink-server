import { fetch } from "../../libs/toplink.db.js";
import model from "./query.js";

const CHECK_EMAIL = async (email) => {
  try {
    return await fetch(model.CHECK_EMAIL, email);
  } catch (error) {
    console.error(error);
  }
};

const CHECK_ID = async (id) => {
  try {
    return await fetch(model.CHECK_ID, id);
  } catch (error) {
    console.error(error);
  }
};

const CHANGE_PASSWORD = async (password, id) => {
  try {
    return await fetch(model.CHANGE_PASSWORD, password, id);
  } catch (error) {
    console.error(error);
  }
};

export { CHECK_EMAIL, CHECK_ID, CHANGE_PASSWORD };
