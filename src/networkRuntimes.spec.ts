import { PORT, URL_PATH } from "./consts";
import { endpoints } from "./endpoints";
import { request } from "./request";
import { retrieveChainSpec } from "./retrieveChainSpec";
import { ChainSpec, isSome, Option } from "./types";

const polkadotEndpoints = endpoints['polkadot'];

describe('Runtime Tests for blocks', () => {
  for (let i = 0; i < polkadotEndpoints.length; i++) {
    const blockPath = polkadotEndpoints[i];
    const blockHeight = polkadotEndpoints[i].split('/')[2];

    it(`should return a successfull request for block: ${blockHeight}`, async () => {
      jest.setTimeout(15000)
      const res = await request(blockPath, `127.0.0.1`, 8080);
      const responseJson = JSON.parse(res as string);

      expect(responseJson['number']).toBe(blockHeight);
    });
  }
});
