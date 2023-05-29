// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/modules/createtableinput.html#tableclass

import AWS from "aws-sdk";
import { AWSRegions } from "./types/aws";

AWS.config.update({ region: AWSRegions.US_EAST_2 });

const { DynamoDB } = AWS;

const dynamoDb = new DynamoDB();

// create a table.
export const dynamodbCreateTable = async (
  params: AWS.DynamoDB.CreateTableInput
) => {
  try {
    const result = await dynamoDb.createTable(params).promise();
    console.log("Table Created", result);
    return result;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error("dynamodbCreateTable error object unknown type");
  }
};
// describe a table.

// delete a table.

// create a record.
