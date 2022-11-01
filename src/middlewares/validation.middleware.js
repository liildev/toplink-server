import ApiError from "../errors/api.error.js";

export default (req, res, next) => {
  let { fullName, username, email, password, number } = req.body;

  function validateEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.url == "/registration") {
    if (![fullName, username, email, number, password].every(Boolean)) {
      return next(ApiError.badRequest("Missing credentials"));
    } else if (!validateEmail(email)) {
      return next(ApiError.badRequest("Invalid email"));
    }
  }

  if (req.url == "/login") {
    if (![email, password].every(Boolean)) {
      return next(ApiError.badRequest("Missing credentials"));
    } else if (!validateEmail(email)) {
      return next(ApiError.badRequest("Invalid email"));
    }
  }

  if (req.url == "/forgot-password") {
    if (![email].every(Boolean)) {
      return next(ApiError.badRequest("Missing credentials"));
    } else if (!validateEmail(email)) {
      return next(ApiError.badRequest("Invalid email"));
    }
  }

  if (req.url == "/reset-password") {
    if (![password].every(Boolean)) {
      return next(ApiError.badRequest("Missing credentials"));
    }
  }

  return next();
};
