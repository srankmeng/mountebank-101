function (request, response, logger) {
    let res = {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: {
            order_id: 8004359122,
            total_price: 14.95,
            timestamp: new Date().toString()
        }
    }
    return res;
}