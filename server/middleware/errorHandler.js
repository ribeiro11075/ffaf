exports.errorHandler = function (err, req, res, next) {
  res.json({err: err});
};
