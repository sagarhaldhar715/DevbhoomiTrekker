const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((error) => {
            console.log(
                `[ERROR] ${req.method} ${req.originalUrl} -> ${error.message}`
            );

            next(error);
        });
    };
};

export default asyncHandler;