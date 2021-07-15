'use strict';
const AWS = require('aws-sdk');

const S3 = new AWS.S3({});
const DEFAULT_TTL = 100;

exports.getPhoto = async (event) => {
    const {fileName} = event.pathParameters;
    const {BUCKET_NAME} = process.env;

    const signedUrl = S3.getSignedUrl('getObject', {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Expires: DEFAULT_TTL
    })

    return {
        signedUrl,
    }
};
