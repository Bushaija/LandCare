const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000', // the URL of your backend API
      changeOrigin: true,
    })
  );
  
  // add your redirect and rewrite rules here
  app.get('/', function(req, res) {
    res.redirect('/home');
  });
};
