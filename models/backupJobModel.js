const mongoose = require("mongoose");

const backupJobSchema = mongoose.Schema({
    database: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true,
    },
    gapHours: {
        type: Number,
        default: 0,
    },
    gapMinutes: {
        type: Number,
        default: 0
    },
    nextTime: {
        type: Date,
       required: true
    }
});


const BackupJob = mongoose.model('BackupJob', backupJobSchema);

module.exports = BackupJob;