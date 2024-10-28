"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const cron_1 = require("cron");
class CronService {
    static createJob(cronTime, onTick) {
        const job = new cron_1.CronJob(cronTime, onTick);
        job.start();
        return job;
    }
}
exports.CronService = CronService;
