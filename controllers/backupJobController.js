const catchAsync = require("../utils/catchAsync");
const BackupJob = require("../models/backupJobModel");
const appError = require("../utils/appError");

exports.getAllBackupJobs = catchAsync(async (req, res, next) => {
  const jobs = await BackupJob.find();
  res.status(200).json({
    message: "Sucess",
    count: jobs.length,
    data: {
        jobs,
    },
  });
});


exports.createBackupJob = catchAsync(async (req, res, next) => {
  const gapHours = req.body.gapHours || 0;
  const gapMinutes = req.body.gapMinutes | 0
  const date = new Date();
  const hours = date.getHours() +gapHours;
  const minutes = date.getMinutes() + gapMinutes;
  date.setHours(hours);
  date.setMinutes(minutes);

  const job = {
    ...req.body,
    nextTime: date
  }

  const createdJob = await BackupJob.create(job);
  res.status(201).json({
    status: "Success",
    data: {
      createdJob,
    },
  });
});

// exports.getStage = catchAsync(async (req, res, next) => {
//   const stage = await Stage.findById(req.params.id).populate("courses");
//   res.status(200).json({
//     message: "Sucess",
//     data: {
//         stage
//     },
//   });
// });

// exports.updateStage = catchAsync(async (req, res, next) => {
  
//   const stage = await Stage.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     // runValidators: true,
//   });

//   if (!stage) {
//     return next(new appError("no stage found with that ID", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       stage,
//     },
//   });
// });

// exports.deleteStage = catchAsync(async (req, res, next) => {
//   const stage = await Stage.findByIdAndDelete(req.params.id);

//   if (!stage) {
//     return next(new appError("no stage found with that ID", 404));
//   }
//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// });

