import { getStreamOperationHandler } from "@smithy-demo/string-wizard-service-ssdk";
import { APIGatewayProxyHandler } from "aws-lambda";
import { StreamOperationOperation } from "./streamOperation";
import { getApiGatewayHandler } from "./apigateway";

// This is the entry point for the Lambda Function that services the StreamOperationOperation
export const lambdaHandler: APIGatewayProxyHandler = getApiGatewayHandler(getStreamOperationHandler(StreamOperationOperation));
