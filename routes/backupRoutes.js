const express = require('express');
const backupController = require('./../controllers/backupController');

const router = express.Router();


router
  .route('/backup')
  .get(backupController.createBackup)

router.route('/restore').get(backupController.restore);
router.route('/databases').get(backupController.getListOfDatabases);

router.route('/schedule');
  
module.exports = router;

