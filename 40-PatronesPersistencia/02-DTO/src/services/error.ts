export enum ErrorStatus {
  BadRequest = 400,
  NotFound = 404,
};

export class ApiError extends Error {
  statusCode;
  constructor(message: string, statusCode: ErrorStatus) {
    super(message);
    this.statusCode = statusCode;
  }
}
