var AWS = require("aws-sdk");
var awsconfig = {
  conf: {
    region: 'ap-south-1',
    accessKeyId: 'AKIA6N432NBKRTGU2H6J',
    secretAccessKey: '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',
  },
  docClient: new AWS.DynamoDB.DocumentClient(),
};
AWS.config.update(awsconfig.conf);
// export our configuration
module.exports = awsconfig; 