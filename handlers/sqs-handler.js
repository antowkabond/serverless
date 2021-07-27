'use strict';

exports.consume = async (event) => {
    const [record] = event.Records;

    const message = `Consumed record ${JSON.stringify(record)}`;

    console.log(message);
};
