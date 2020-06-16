'use strict';

const isProduction = process.env.NODE_ENV === 'production';

const log = (message, type = 'log', showInProduction = false) => {
    if (isProduction && !showInProduction) {
        return void 0;
    }

    return console[type](message);
};

export default log;
