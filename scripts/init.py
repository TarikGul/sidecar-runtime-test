import os
import time
import sys
import subprocess
import signal

# On OSX do `kill -9 <PID>` to kill the process

'''
@TODO 

1. Get the path to the sidecar repo, and cd into it.

2. Call yarn dev under a subprocess like below. 
'''
def call_sidecar_instance(chain_addr: str):
    to_be_exported = 'SAS_SUBSTRATE_WS_URL={}'.format(chain_addr)

    subprocess.call(['export ', to_be_exported])
    process = subprocess.run(['substrate-api-sidecar'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    print(to_be_exported)
    print("process PID: {}".format(process.pid))
    
    return process.pid

'''
This is a local test, 
ie: `cd ../ && yarn test`
'''
def call_runtime_test():
    print('call runtime test')

def kill_process(pid: int):
    os.kill(pid, signal.SIGTERM)

'''
@TODO 

1. Could have a while loop with a sleep to lower iterations in order to
keep checking the STDOUT. Maybe 'statuscode'?

2. 
'''
def main():
    print('main function')


if __name__ == "__main__":
    call_sidecar_instance('ws://127.0.0.1:9944')
