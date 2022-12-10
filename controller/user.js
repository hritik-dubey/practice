let AWS = require("aws-sdk")
let aws = require("../aws/awsConfig")
AWS.config.update(aws);
let dynamoDb = new AWS.DynamoDB.DocumentClient()
let createUser1 = async (req, res) => {
    try {
        let created = dynamoDb.put(
            {
                "TableName": "user_List",
                "Item": {
                    "userId": "1",
                    "name": "hritik",
                    "Color": "redshsyui",
                    "Weight": "gvjkhgsdfjkld;elkdfgnmfkls",
                    "LastName": "Dubey"
                }
            }, function (err, data) {
                if (err) {
                    console.log("Error", err);
                } else {
                    console.log("Success", data);
                }
            }
        )
        // console.log(JSON.stringify(created));
        console.log("Items are succesfully ingested in table ..................");
        return res.status(201).send({ msg: "created", data: created })

    } catch (err) {
        return res.status(500).send({ msg: "Error", error: err.message })
    }
}
let createUser = async (req, res) => {
    try {
        let params = {
            "TableName": "user_List",
            "Item": req.body,
        }
        let created = await dynamoDb.put(params).promise()
        // console.log("user created");
        console.log(JSON.stringify(created));
        return res.status(201).send({ msg: "created", data: "user created succesfully" })
    } catch (err) {
        return res.status(500).send({ msg: "Error", error: err.message })
    }
}
let getById = async (req, res) => {
    try {
        var params = {
            "TableName": "user_List",
            "Key": {
                "userId": req.body.userId,

            },
        };
        var result = await dynamoDb.scan(params).promise()
        return res.status(201).send({ msg: "created", data: result.Items })

    } catch (err) {
        return res.status(500).send({ msg: "Error", error: err.message })
    }
}
let updateById = async (req, res) => {
    try {
        var params = {
            "TableName": "user_List",
            "Key": {
                "userId": req.body.userId,
            },
            UpdateExpression:
                'set Color = :y , LastName = :x'

            ,
            ExpressionAttributeValues: {
                ':x': req.body.LastName,
                ':y': req.body.Color,
            },
            returnValues: "UPDATED_NEW"
        };
        var result = await dynamoDb.update(params).promise()
        // let ans = JSON.stringify(result)
        return res.status(200).send({ msg: "created", data: result })
    } catch (err) {
        return res.status(500).send({ msg: "Error", error: err.message })
    }
}
let deleteById = async (req, res) => {
    try {
        const params = {
            "TableName": "user_List",
            "Key": {
                "userId": req.body.userId,
            },
        };
        var result = await dynamoDb.delete(params).promise()
        return res.status(200).send({ msg: "created", data: result })
    } catch (err) {
        return res.status(500).send({ msg: "Error", error: err.message })
    }
}
let query = async (req, res) => {
    try {
        var params = {
            TableName: "user_List",
            FilterExpression: "#c = :d",
            ExpressionAttributeNames: {
                "#c": "Color"
            },
            ExpressionAttributeValues: {
                ":d": req.body.Color
            },
        }
        var result = await dynamoDb.scan(params).promise()
        return res.status(200).send({ msg: "created", data: result.Items })
    } catch (err) {
        return res.status(500).send({ msg: "Error", error: err.message })
    }
}
//RALATIONSHIP BUILD  IN NODE JS 
module.exports = { createUser, createUser1, getById, updateById, deleteById, query }
