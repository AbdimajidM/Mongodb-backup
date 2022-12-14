const express = require('express');
const backupJobController = require('./../controllers/backupJobController');

const router = express.Router();


router
  .route('/')
  .get(backupJobController.getAllBackupJobs)
  .post(backupJobController.createBackupJob)

  
module.exports = router;

