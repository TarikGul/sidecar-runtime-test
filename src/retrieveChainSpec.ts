import { PORT, URL_PATH } from "./consts";
import { request } from "./request";
import { ChainSpec, Option } from "./types";

export const retrieveChainSpec = async (): Promise<Option<ChainSpec>> => {
  const blockPath = "/runtime/spec";
  const res = await request(blockPath, URL_PATH, PORT);
  const responseJson = JSON.parse(res as string);

  return responseJson["specName"];
};
