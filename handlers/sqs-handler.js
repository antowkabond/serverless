'use strict';

exports.consume = async (event) => {
    const [record] = event.Records;

    const message = `Consume record ${JSON.stringify(record[0])}`;

    console.log(message);
};
