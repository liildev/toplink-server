import ApiError from "../errors/api.error.js";

export default (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ status: err.status, message: err.message });
  }

  res.status(err.status).json({
    status: err.status,
    message: "InternalServerError",
  });
};
