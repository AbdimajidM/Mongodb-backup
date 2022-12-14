const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError')

const globalErrorHandler = require('./controllers/errorController')


const backupRoutes = require('./routes/backupRoutes')
const backupJobRoutes = require('./routes/backupJobRoutes')

const app = express();

// 1) MIDDLEWARES

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());


// 3) ROUTES

app.use('/api/v1/', backupRoutes);
app.use('/api/v1/backupJobs', backupJobRoutes)

app.all('*', (req, res, next) => {
  next(new AppError(`cant't found ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
