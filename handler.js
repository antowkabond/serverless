'use strict';

exports.consume = async (event) => {
    const [record] = event.Records;

    return {
        message: `Consume records ${JSON.stringify(record[0])}`,
    }
};
