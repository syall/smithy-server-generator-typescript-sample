import { Operation } from "@aws-smithy/server-common";
import {
  StreamOperationInput,
  StreamOperationOutput,
} from "@smithy-demo/string-wizard-service-ssdk";
import { HandlerContext } from "./apigateway";
import {
  Readable
} from "stream";

// This is the implementation of business logic of the LengthOperation
export const StreamOperationOperation: Operation<StreamOperationInput, StreamOperationOutput, HandlerContext> = async (
  input,
  context
) => {
  console.log(`Received StreamOperation operation from: ${context}`);
  const stream: Readable = input.logo as Readable;
  for await (const chunk of stream) {
    console.log(chunk);
  }
  return {};
};
