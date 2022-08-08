export const ErrorStatus = {
  BadRequest: 400,
  NotFound: 404,
};

export class ApiError extends Error {
  statusCode;
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
