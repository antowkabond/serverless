'use strict';

exports.consume = async (event) => {
    console.log(event.Records);
    const [record] = event.Records;

    const message = `Consume record ${JSON.stringify(record[0])}`;

    console.log(message);
};
