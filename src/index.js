'use strict';

const isProduction = process.env.NODE_ENV === 'production';

const log = (message, type = '', showInProduction = false) => {
    if (isProduction && !showInProduction) {
        return void 0;
    }

    if (!type || type === '') {
        type = 'log';
    }

    return console[type](message);
};

export default log;
