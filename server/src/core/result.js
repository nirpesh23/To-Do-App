export default class Result{
    code;
	message;
	data;
	errors;

	constructor(code, message, data, errors) {
		this.code = code;
		this.message = message;
		this.data = data;
		this.errors = errors;
	}

    static createError(error) {
		throw new Result("-1", "ERROR", null, [error]);
	}

    static createSuccess(data){
		return new Result("0", "SUCCESS", data, []);
	}

    static createErrorWithMessage(error, message){
		throw new Result("-1", message, null, [error]);
	}

    static createSuccessWithMessage(data, message){
		return new Result("0", message, data, []);
	}
}