import CustomAPIError from "./custom-api.js";

class unAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

export default unAuthenticatedError;
