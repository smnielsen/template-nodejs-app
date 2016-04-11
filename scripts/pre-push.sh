#!/usr/bin/env bash

# Load dependencies
ROOT_DIR=`pwd`
source ${ROOT_DIR}/scripts/lib/common.sh

# Run script
head "Pre-push validation"

# head "Linting tests"
# make lint
# mayfail $? "make lint failed, please fix code and recommit"

info "Unit tests"
make test
mayfail $? "make test failed, please fix code and recommit"

exit 0
