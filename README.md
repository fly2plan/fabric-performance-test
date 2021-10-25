# Fabric Ordering Service  Performance Test


#### About
This folder contains the caliper framework-based test report of the HLF "mir" and "raft" ordering service performance for different byte-size and send request rates(TPS). A simple smart contract called "asset "  is used for testing the performance. The contract implemented functionalities like create, update, delete, getAsset, rich queries, private data, empty data, etc. 

All the caliper benchmark files and network configuration are placed inside the caliper/src folder. The contract folder has all the common benchmark files used for testing the performance. The test was conducted on a **single host with 2 org with 1 peer and 3 (RAFT) or 4 (Mir) orderers**. The testnetwork  and chaincode used for the caliper test were placed inside the mir and raft folders. 

#### Running the Mir BFT ordering service test

    - Clone the repo.
    - Cloned the main branch of fabric from the fly2plan repo.
    - Use it to build the new fabric images. Run  "make all " commands for building the new images.
    - Copy the bin folder under the cloned fabric repo.
    - Place bin folder inside the cloned fabric-performance-test repo's mir folder.
    - Now, run ./manageNetwork.sh mir up
    - Run ./testNetwork.sh mir
    - Go inside the caliper/src folder , run npm i and then run the make command to test different performance scenarios.
    
#### Runnning the RAFT CFT ordering service test.

    - Clone the repo.
    - Clone hyperledger/fabric-samples repo.
    - Copy the bin folder  from  hyperledger/fabric-samples .
    - Place bin folder inside the cloned fabric-performance-test repo's raft folder.
    - Now, run ./manageNetwork.sh raft up
    - Run ./testNetwork.sh raft
    - Go inside caliper/src folder , run npm i and then run make command to test diffrent performance scenarios.
    
    *  > "After running each scenario, bring the network down using ./manageNetwork.sh raft down or ./manageNetwork.sh mir down command. **
    *  > Then, up the network again using ./manageNetwork.sh raft up or ./manageNetwork.sh mir up  and run ./testNetwork.sh <raft or mir>.  **

 The mir-performance-report and raft-performance-report folders contain the reports generated using the above steps. 
 > The files named with conviction report-<benchmark-file-name> .  eg: report-create-asset-local.html is the test report for the benchmark file create-asset-local.yaml inside caliper/src/contract .
    


 The mir ordering service is not able to generate test reports for some benchmark test files such as follows:

- [ ] base.yaml
- [ ] base.yaml.
- [ ] fixed-tps.yaml.

    
    
 **Final Report - Mir**


| **Benchmark File Name** | **Completion Status** | **Remarks** |
| --- | --- | --- |
| create-asset.yaml | Successful | Takes too long |
| create-private-asset.yaml | Successful | Takes too long |
| get-asset.yaml | Successful | Takes too long |
| empty-contract-1of.yaml | Successful |  |
| get-asset-local.yaml | Successful | |
| create-private-asset-local.yaml | Successful | |
| create-asset-local.yaml | Successful | Takes too long |
| test.yaml | Successful | |
| mixed-range-query-pagination.yaml| Unsuccessful | Takes too long |
| fixed-tps-runs.yaml | Unsuccessful | Takes too long | | 
| report-delete-asset-local | Successful | |
| get-asset-local-high-tps  | Successful | |
