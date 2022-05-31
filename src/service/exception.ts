export class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class ClientError extends CustomError {}

export class ServerError extends CustomError {
  constructor() {
    super('Server error', 500);
  }
}
