// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.CreateTable

import { dynamodbCreateTable } from "./aws";

const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
  TableName: "vendors",
  KeySchema: [{ AttributeName: "twitterId", KeyType: "HASH" }],
  AttributeDefinitions: [{ AttributeName: "twitterId", AttributeType: "S" }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};
dynamodbCreateTable(vendorsTableParams);
