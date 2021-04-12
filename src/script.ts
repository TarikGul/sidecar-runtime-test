import { request } from "./request";

const sendRequests = async () => {
  let blockHeight = 4988200;

  const errorBlocks = [];

  for (let i = 0; i < 100000; i++) {
    setTimeout((_) => _, 250);

    const blockPath = `/blocks/${blockHeight}`;
    const res = await request(blockPath, `127.0.0.1`, 8080);
    const responseJson = JSON.parse(res as string);

    if (responseJson["number"]) {
      console.log(`Block ${blockHeight} was a success`);
    } else {
      errorBlocks.push(blockHeight);
      console.log(`------------------------------`);
      console.log(`[ERROR]: Block ${blockHeight} had an error`);
      console.log(`------------------------------`);
    }

    blockHeight -= 1;
  }
  return errorBlocks;
};

sendRequests();
