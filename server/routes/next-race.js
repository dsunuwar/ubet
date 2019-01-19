const requestPromise = require('request-promise');

const express = require('express');
const nextRaceRouter = express.Router();

nextRaceRouter.route('/:jurisdiction').get((request, response, next) => {
    const apiRaces = `https://api.beta.tab.com.au/v1/tab-info-service/racing/next-to-go/races?jurisdiction=${
        request.params.jurisdiction
    }`;
    console.log(apiRaces);

    // TODO: move the api call to a service module
    requestPromise(apiRaces)
        .then(res => response.send(res))
        .catch(err => console.log('err'));
});

module.exports = nextRaceRouter;
