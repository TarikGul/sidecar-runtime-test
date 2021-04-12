import { PORT, URL_PATH } from "./consts";
import { endpoints } from "./endpoints";
import { request } from "./request";
import { retrieveChainSpec } from "./retrieveChainSpec";
import { ChainSpec, isSome, Option } from "./types";

describe("Runtime Tests", () => {
  let chain: Option<ChainSpec>;
  let chainEndpoints: Option<string[]>;

  // FIX THIS
  beforeAll(async () => {
    chain = await retrieveChainSpec();

    if (isSome(chain)) {
      chainEndpoints = endpoints[chain];
    }
  });

  describe("Run Endpoints", () => {
    if (isSome(chainEndpoints)) {
      for (let i = 0; i < chainEndpoints.length; i++) {
        const blockPath = chainEndpoints[i];
        const blockHeight = chainEndpoints[i].split("/")[2];

        it(`should return a successfull request for block ${blockHeight}`, async () => {
          const res = await request(blockPath, URL_PATH, PORT);
          const responseJson = JSON.parse(res);

          expect(responseJson["number"]).toBe(blockHeight);
        });
      }
    } else {
      // ADD A PROCESS EXIT
      console.log("Chain spec not detacted. Aborting test suite.");
    }
  });
});
