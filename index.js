const AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  const params = {
    TableName: "MyCrazyTable"
  };
  try {
    const data = await documentClient.scan(params).promise();
    return data.Items;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};
