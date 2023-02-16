const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');

const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);

        // sendBasicEmail(
        //     // 'support@admin.com',
        //     // 'santoshchhinchholikar@gmail.com',
        //     // 'This is a testing email',
        //     // 'Hey, how are you, I hope you like the suppot'
        // );

        cron.schedule('*/2 * * * *', () => {
            console.log('running a task evry two minutes');
        })
    });
}

setupAndStartServer();