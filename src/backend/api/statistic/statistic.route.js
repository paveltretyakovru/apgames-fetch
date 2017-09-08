const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({statistic: 'data'});
});

router.get('/:startDate', (req, res) => {
  const startDate = req.params.startDate;

  return res.json({startDate: startDate});
});

router.get('/:startDate/:endDate', (req, res) => {
  const endDate = req.params.endDate;
  const startDate = req.params.startDate;

  return res.json({startDate: startDate, endDate: endDate});
});

module.exports = router;