import { APIGatewayProxyEvent } from 'aws-lambda';

export const hello = async function (event: APIGatewayProxyEvent) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: `Hello! You've hit ${event.requestContext.stage}${event.path}`}),
  };
};