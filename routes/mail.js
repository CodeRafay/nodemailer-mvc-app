const express = require('express');
const { showForm, sendEmail } = require('../controllers/mailController');
const router = express.Router();

router.get('/', showForm);
router.post('/send', sendEmail);

module.exports = router;
