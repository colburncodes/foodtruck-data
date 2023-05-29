// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/modules/createtableinput.html#tableclass

import AWS from "aws-sdk";
import { AWSRegions } from "./types/aws";
import { Vendor } from "./types/twitter";
import { marshall } from "@aws-sdk/util-dynamodb";

AWS.config.update({ region: AWSRegions.US_EAST_2 });

const { DynamoDB } = AWS;

const dynamoDb = new DynamoDB();

// create a table.
export const dynamodbCreateTable = async (
  params: AWS.DynamoDB.CreateTableInput
) => {
  try {
    const result = await dynamoDb.createTable(params).promise();
    console.log("Table created", result);
    return result;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error("dynamodbCreateTable error object unknown type");
  }
};
// retrieve table definition.
export const dynamodbDescribeTable = async (tableName: string) => {
  try {
    const table = await dynamoDb
      .describeTable({
        TableName: tableName,
      })
      .promise();
    console.log("Table retrieved", table);
    return table;
  } catch (e) {
    if (e instanceof Error) {
      return e;
    }
    throw new Error("dynamodbDescribeTable error object unknown type");
  }
};

// delete a table.
export const dynamodbDeleteTable = async (tableName: string) => {
  try {
    const result = await dynamoDb
      .deleteTable({
        TableName: tableName,
      })
      .promise();

    console.log("TABLE DELETED", result);
    return result;
  } catch (e) {
    if (e instanceof Error) {
      return e;
    }
    throw new Error("dynamodbDeleteTable error object unknown type");
  }
};

// create a record.
export const dynamodbCreateRecord = async (
  tableName: string,
  vendor: Vendor
) => {
  try {
    await dynamoDb
      .putItem({
        TableName: tableName,
        Item: marshall(vendor),
      })
      .promise();
    console.log("Record created");
  } catch (e) {
    if (e instanceof Error) {
      return e;
    }
    throw new Error("dynamodbCreateRecord error object unknown type");
  }
};
