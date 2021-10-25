/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';


const helper = require('./helper');
const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

/**
 * Workload module for the benchmark round.
 */
class GetAssetWorkload extends WorkloadModuleBase {
    /**
     * Initializes the workload module instance.
     */
    constructor() {
        super();
        this.contractId = 'basic';
        this.assets = [];
        this.byteSize = 0;
        this.consensus = false;
    }

    /**
     * Initialize the workload module with the given parameters.
     * @param {number} workerIndex The 0-based index of the worker instantiating the workload module.
     * @param {number} totalWorkers The total number of workers participating in the round.
     * @param {number} roundIndex The 0-based index of the currently executing round.
     * @param {Object} roundArguments The user-provided arguments for the round from the benchmark configuration file.
     * @param {BlockchainInterface} sutAdapter The adapter of the underlying SUT.
     * @param {Object} sutContext The custom context object provided by the SUT adapter.
     * @async
     */
    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
        await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);

        const args = this.roundArguments;
        this.contractId = args.contractId ? args.contractId : 'basic';
        this.assets = args.assets ? parseInt(args.assets) : 0;
        this.byteSize = args.byteSize;
        this.consensus = args.consensus ? (args.consensus === 'true' || args.consensus === true): false;

        const noSetup = args.noSetup ? (args.noSetup === 'true' || args.noSetup === true) : false;
        if (noSetup) {
            console.log('   -> Skipping asset creation stage');
        } else {
            console.log('   -> Entering asset creation stage');
            await helper.addBatchAssets(this.sutAdapter, this.sutContext, this.workerIndex, args);
            console.log('   -> Test asset creation complete');
        }
    }

    /**
     * Assemble TXs for the round.
     * @return {Promise<TxStatus[]>}
     */
    async submitTransaction() {
        const uuid = Math.floor(Math.random() * Math.floor(this.assets));
        const itemKey = 'client' + this.workerIndex + '_' + this.byteSize + '_' + uuid;
        const args = {
            contractId: this.contractId,
            contractFunction: 'getAsset',
            contractArguments: [itemKey]
        };
        
        if (this.consensus) {
            args.readOnly = false;
        } else {
            args.readOnly = true;
        }

        await this.sutAdapter.sendRequests(args);
    }
}

/**
 * Create a new instance of the workload module.
 * @return {WorkloadModuleInterface}
 */
function createWorkloadModule() {
    return new GetAssetWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;
