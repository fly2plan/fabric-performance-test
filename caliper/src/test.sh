if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit 0
fi

WORKSPACE=$PWD
echo "---- Setting workspace path ${WORKSPACE}"
# npm install --only=prod @hyperledger/caliper-cli@0.4.0
npx caliper bind --caliper-bind-sut fabric:2.1.0 --caliper-bind-args=-g
#if [ "$1" == "mir" ]; then
#    NETWORK=networks/mir-config.yaml
#elif [ "$1" == "raft" ]; then
    NETWORK=$1
#fi
echo "Initialised Network parameter"

# Enable tests to use existing caliper-core package
#export NODE_PATH=$(which node)

# Build config for target network
# cd ${WORKSPACE}networks/fabric/config_solo_raft
# ./generate.sh
# ./createChannel.sh
# cd ${WORKSPACE}
# echo "finished setting up workspace"

# Available benchmarks
BENCHMARK=$2
echo $2
# Available phases
# PHASES=("caliper-flow-only-start" "caliper-flow-only-init" "caliper-flow-only-install" "caliper-flow-only-test" "caliper-flow-only-end")
echo "finished setting up BENCHMARK"

echo $3
    npx caliper launch manager \
    --caliper-workspace ${WORKSPACE} \
    --caliper-benchconfig ${BENCHMARK} \
    --caliper-networkconfig ${NETWORK} \
    --caliper-fabric-gateway-enabled \
    --caliper-flow-skip-init\
    --caliper-fabric-gateway-discovery
   

echo "====================finished testing.===================="
