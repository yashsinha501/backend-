class ApiResponse {
    constructor(statusCode, data, manage = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = this.message
        this.success = statusCode < 400
    }
}

export { ApiResponse }