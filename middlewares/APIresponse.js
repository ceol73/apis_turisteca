class APIresponse {
  constructor(success, message, data, res, code = 200) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.res = res;
    this.code = code;
  }

  send() {
    this.res.status(this.code).json({
      success: this.success,
      message: this.message,
      data: this.data,
    });
  }
}

module.exports = APIresponse;
