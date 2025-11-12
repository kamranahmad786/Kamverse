export function notFound(req, res, next) {
  res.status(404);
  res.json({ error: `Not Found - ${req.originalUrl}` });
}

export function errorHandler(err, req, res, next) {
  console.error(err);
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(status);
  res.json({ error: err.message || 'Internal Server Error' });
}
