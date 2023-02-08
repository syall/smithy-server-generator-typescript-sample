import { StreamOperationOperation } from "./streamOperation";
import {
  StreamOperationInput
} from "../codegen/build/smithyprojections/server-codegen/ts-server/typescript-ssdk-codegen/src/models/models_0";
import { Readable } from "stream";

describe("Length tests", () => {
  const context = { user: "user123" };

  it("returns nothing", async () => {
    const data = [1, 2, 3];
    const input: StreamOperationInput = {
      logo: Readable.from(data),
    };
    await StreamOperationOperation(input, context);
  });

});
