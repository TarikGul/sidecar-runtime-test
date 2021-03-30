import http from "http";

import { endpoints } from "./endpoints";

const polkadotEndpoints = endpoints["polkadot"];

function request(path: string, hostname: string, port: number) {
  return new Promise((resolve) => {
    http.get({ path, hostname, port }, (response) => {
      let data = "";
      response.on("data", (_data) => (data += _data));
      response.on("end", () => resolve(data));
    });
  });
}

describe("Runtime Tests for blocks", () => {
  for (let i = 0; i < polkadotEndpoints.length; i++) {
    const blockPath = polkadotEndpoints[i];
    const blockHeight = polkadotEndpoints[i].split("/")[2];

    it("should return a successfull request", async () => {
      const res = await request(blockPath, `127.0.0.1`, 8080);
      const responseJson = JSON.parse(res as string);

      expect(responseJson["number"]).toBe(blockHeight);
    });
  }
});
