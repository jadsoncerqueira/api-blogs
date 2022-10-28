const map = {
  USER_REGISTED: 409,
  INVALID_VALUE: 400,
};

const mapError = (error) => map[error] || 500;

module.exports = { mapError };