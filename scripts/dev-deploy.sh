set -e

echo
echo "Executing near dev-deploy for contract wasm file."
echo

near dev-deploy ./build/release/contract.wasm

echo "Development deployment finished"