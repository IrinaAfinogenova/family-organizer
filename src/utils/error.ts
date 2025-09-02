export class ErrorApi extends Error { // TODO move to utils
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.name = "ErrorApi";
    this.status = status;
  }
}