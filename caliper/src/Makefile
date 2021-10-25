create-asset-raft:
	@# create- asset-raft testing
	./test.sh networks/raft-config.yaml contract/create-private-asset.yaml "Testing-create-asset-raft"

base-raft:
	@# create- asset-raft testing
	./test.sh networks/raft-config.yaml contract/base.yaml "Testing-base-raft"
test-raft:
	@# create- asset-raft testing
	./test.sh networks/raft-config.yaml contract/test.yaml "Testing-test-raft"

empty-contract-1of-raft:
	@# create- asset-raft testing
	./test.sh networks/raft-config.yaml contract/empty-contract-1of.yaml "Testing-empty-contract-1of-raft"

delete-asset-raft:
	@# create- asset-raft testing
	./test.sh networks/raft-config.yaml contract/delete-asset.yaml "Testing-delete-raft"

create-private-asset-raft:
	@# create-private-asset-raft testing
	./test.sh networks/raft-config.yaml contract/create-private-asset.yaml "Testing-create-private-asset-raft"

fixed-tps-runs-raft:
	@# fixed-tps-runs-raft-raft testing
	./test.sh networks/raft-config.yaml contract/fixed-tps-runs.yaml "Testing-fixed-tps-runs-raft"
get-asset-raft:
	@# get-asset-raft testing
	./test.sh networks/raft-config.yaml contract/get-asset.yaml "Testing-get-asset-raft"

get-private-asset-raft:
	@# get-asset-raft testing
	./test.sh networks/raft-config.yaml contract/get-private-asset.yaml "Testing-get-private-asset-raft"

mixed-range-query-pagination-raft:
	@# mixed-range-query-pagination-raft testing
	./test.sh networks/raft-config.yaml contract/mixed-range-query-pagination.yaml "Testing-mixed-range-query-pagination-raft"

mixed-rich-query-pagination-raft:
	@# mixed-rich-query-pagination testing
	./test.sh networks/raft-config.yaml contract/mixed-rich-query-pagination.yaml "Testing-mixed-rich-query-pagination-raft"



create-asset-mir:
	@# create- asset-raft testing
	./test.sh networks/mir-config.yaml contract/create-private-asset.yaml "Testing-create-asset-raft"

create-private-asset-mir:
	@# create-private-asset-raft testing
	./test.sh networks/mir-config.yaml contract/create-private-asset.yaml "Testing-create-private-asset-raft"

fixed-tps-runs-mir:
	@# fixed-tps-runs-raft-raft testing
	./test.sh networks/mir-config.yaml contract/fixed-tps-runs.yaml "Testing-fixed-tps-runs-raft"
get-asset-mir:
	@# get-asset-raft testing
	./test.sh networks/mir-config.yaml contract/get-asset.yaml "Testing-get-asset-raft"

get-private-asset-mir:
	@# get-asset-raft testing
	./test.sh networks/mir-config.yaml contract/get-private-asset.yaml "Testing-get-private-asset-raft"

mixed-range-query-pagination-mir:
	@# mixed-range-query-pagination-raft testing
	./test.sh networks/mir-config.yaml contract/mixed-range-query-pagination.yaml "Testing-mixed-range-query-pagination-raft"

mixed-rich-query-pagination-mir:
	@# mixed-rich-query-pagination testing
	./test.sh networks/mir-config.yaml contract/mixed-rich-query-pagination.yaml "Testing-mixed-rich-query-pagination-raft"



base-mir:
	@# create- asset-raft testing
	./test.sh networks/mir-config.yaml contract/base.yaml "Testing-base-mir"
test-mir:
	@# create- asset-raft testing
	./test.sh networks/mir-config.yaml contract/test.yaml "Testing-test-mir"

empty-contract-1of-mir:
	@# create- asset-raft testing
	./test.sh networks/mir-config.yaml contract/empty-contract-1of.yaml "Testing-empty-contract-1of-mir"
	

readasset:
	@# Read acris data local test
	./test.sh raft contract/create-asset.yaml
	@#npx caliper launch manager --caliper-workspace ./ --caliper-networkconfig networks/networkConfig.yaml --caliper-benchconfig benchmarks/fixmtoacris-write.yaml --caliper-flow-only-test --caliper-fabric-gateway-enabled --caliper-flow-only-skip-init

