## Purpose

The overall purpose of this is to give an idea of what it could possible look like to test
a set of connections and queries to a set of blocks across runtimes, without having to write 
a set of tests for every possible runtime version, and store that metadata locally. Every time we setup a new release for Substrate-api-sidecar its pretty standard to test the updated repo on blocks from a set of different chains. 

## Getting started

Get the repo cloned and have its dependencies installed. Note, it is under the assumption you already have substrate-api-sidecar locally available, if not you can access and clone the repo [here](https://github.com/paritytech/substrate-api-sidecar).

```
$ git clone https://github.com/TarikGul/sidecar-runtime-test.git
$ cd sidecar-runtime-test
$ yarn
```

## Testing

Below I will go over testing for both Polkadot and Kusama. The same set of instructions also fit for testing Westend as well. 

### Polkadot 

Lets first get sidecar ready in a seperate terminal.

```
$ cd substrate-api-sidecar
$ git checkout <your_branch>
$ export SAS_SUBSTRATE_WS_URL=wss://rpc.polkadot.io
$ yarn
$ yarn dev
```

Sidecar should be now connected to the node, and running successfully. If you are having issues running sidecar and are receiving some odd behavior, contact the maintainers, or file an issue [here](https://github.com/paritytech/substrate-api-sidecar/issues).

Now lets run our runtime tests against polkadot. Go to the terminal where you have sidecar-runtime-test available.

`yarn test --chain polkadot`

Thats it! 
All the tests should come back with green checkmarks.

### Kusama

These steps will be identical to above with just some minor differences. 

Lets first get sidecar ready in a seperate terminal.

```
$ cd substrate-api-sidecar
$ git checkout <your_branch>
$ export SAS_SUBSTRATE_WS_URL=wss://kusama-rpc.polkadot.io
$ yarn
$ yarn dev
```

Now lets run our runtime tests against polkadot. Go to the terminal where you have sidecar-runtime-test available.

`yarn test --chain kusama`


## Exceptions

1. You might get a timeout error with jest if it takes to long to query a block, this is extremely rare, and the likely hood of this happening is very low. But under the circumstance that it does. Just run the tests again as the API should be warmed up by then. 