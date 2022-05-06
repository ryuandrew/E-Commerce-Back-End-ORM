const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes); // if it hits /api, the request will go through the api folder. if not wrong route.

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;