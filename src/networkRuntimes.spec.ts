import { PORT, URL_PATH } from "./consts";
import { endpoints } from "./endpoints";
import { request } from "./request";
import { ChainSpec } from "./types";

// @ts-ignore
const config = JSON.parse(process.env.__CONFIGURATION);
const chain = config.chain as ChainSpec;

const polkadotEndpoints: string[][] = endpoints[chain];

describe("Runtime Tests for blocks", () => {
  jest.setTimeout(15000);

  test.each(polkadotEndpoints)(
    "Given path %p, it should return block height %p",
    async (blockPath) => {
      const blockHeight = blockPath.split("/")[2];
      const res = await request(blockPath, URL_PATH, PORT);
      const responseJson = JSON.parse(res);

      expect(responseJson["number"]).toBe(blockHeight);
    }
  );
});
