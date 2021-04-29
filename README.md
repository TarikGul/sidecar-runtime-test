## Purpose

The overall purpose of this is to give an idea of what it could possible look like to test
a set of connections and queries to a set of blocks across runtimes, without having to write 
a set of tests for every possible runtime version, and store that metadata locally. Every time we setup a new release for Substrate-api-sidecar its pretty standard to test the updated repo on blocks from a set of different chains. 

## Getting started

1. Start `substrate-api-sidecar` in dev mode. 

2. `yarn test --chain <chain_name(lowercase)>`

ex: `yarn test --chain kusama`

This allows you to decide which chain you want to test


