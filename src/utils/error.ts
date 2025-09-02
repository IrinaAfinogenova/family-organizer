export class ErrorApi extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.name = "ErrorApi";
    this.status = status;
  }
}