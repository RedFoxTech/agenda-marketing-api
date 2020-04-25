const Schedule = require('../models/schedule');

module.exports = {
    async index(req, res) {
        try {
            const schedules = await Schedule.find().populate('user');

            return res.send({
                schedules
            });
        } catch (error) {
            return res.status(400).send({
                error: 'Error loading schedules'
            })
        }
    },

    async create(req, res) {
        try {
            req.body.start = req.body.start._date
            req.body.end = req.body.end._date

            const id = await Schedule.findOne().select('id').sort({
                $natural: -1
            });

            if (id)
                req.body.id = '' + (parseInt(id.id) + 1) + ''

            const schedule = await Schedule.create({
                ...req.body,
                user: req.userId
            });

            return res.send({
                schedule
            });

        } catch (error) {
            return res.status(400).send({
                error: 'Error creating new project'
            });
        }
    },

    async update(req, res) {
        try {
            req.body.start = req.body.start._date
            req.body.end = req.body.end._date
            const schedule = await Schedule.findByIdAndUpdate(req.params.scheduleId, {
                ...req.body
            }, {
                new: true
            });

            return res.send({
                schedule
            });
        } catch (error) {
            return res.status(400).send({
                error: 'Error updating new project'
            });
        }
    },

    async delete(req, res) {
        try {
            await Schedule.findByIdAndRemove(req.params.scheduleId);

            return res.send();
        } catch (error) {
            return res.status(400).send({
                error: 'Error deleting schedule'
            })
        }
    }
}