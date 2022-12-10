// Load the AWS SDK for Node.js
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
var dynamodb = new AWS.DynamoDB();

var params = {
    AttributeDefinitions: [
        {
            AttributeName: 'userId',
            AttributeType: 'S'
        },
    ],
    KeySchema: [
        {
            AttributeName: 'userId',
            KeyType: "HASH"
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: 'user_List',
};


// dynamodb.createTable(params, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Table Created", data);
//     }
// });


getDynamoTables = ()=> {
    // dynamodb.listTables({}, (err, data) => {
    //     if (err) console.log(err);
    //     else console.log(data);
    // })
}

deleteTabel  =  ()=>{
    // dynamodb.deleteTable({TableName : "user_List"},(err, data) => {
    //     if (err) console.log(err);
    //     else console.log(data);
    // })
}



module.exports = { getDynamoTables,deleteTabel }