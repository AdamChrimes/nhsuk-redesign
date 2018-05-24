let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.render('home', {});
});

router.get('/decisions', (req, res) => {
  res.render('decisions', {});
});

router.get('/styles/layout', (req, res) => {
  res.render('styles/layout', {});
});

router.get('/styles/typography', (req, res) => {
  res.render('styles/typography', {});
});

router.get('/styles/colours', (req, res) => {
  res.render('styles/colours', {});
});

router.get('/styles/callouts', (req, res) => {
  res.render('styles/callouts', {});
});

router.get('/examples', (req, res) => {
  res.render('examples/index', {});
});

router.get('/examples/page', (req, res) => {
  res.render('examples/page', {});
});

router.get('/examples/page-1', (req, res) => {
  res.render('examples/page-1', {});
});

router.get('/examples/page-2', (req, res) => {
  res.render('examples/page-2', {});
});

router.get('/examples/page-3', (req, res) => {
  res.render('examples/page-3', {});
});

router.get('/examples/page-4', (req, res) => {
  res.render('examples/page-4', {});
});

router.get('/examples/page-5', (req, res) => {
  res.render('examples/page-5', {});
});

router.get('/examples/test-medicine', (req, res) => {
  res.render('examples/test-medicine', {});
});

router.get('/examples/test-medicine-v2', (req, res) => {
  res.render('examples/test-medicine-v2', {});
});

router.get('/examples/test-medicine-v3', (req, res) => {
  res.render('examples/test-medicine-v3', {});
});

router.get('/examples/test-gout', (req, res) => {
  res.render('examples/test-gout', {});
});

module.exports = router;
