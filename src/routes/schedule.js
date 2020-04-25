const express = require('express');
const authMiddleware = require('../middlewares/auth');

const ScheduleController = require('../controllers/scheduleController');

const router = express.Router();

router.use(authMiddleware);

router.get('/', ScheduleController.index);
router.post('/', ScheduleController.create);
router.put('/:scheduleId', ScheduleController.update)
router.delete('/:scheduleId', ScheduleController.delete)

module.exports = app => app.use('/schedule', router);