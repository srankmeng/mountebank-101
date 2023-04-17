function (request) {
    if (request.path.indexOf('/api/v1/product/10') === 0) {
        return { statusCode: 500 };
    }
}