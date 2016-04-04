#!/usr/bin/env bash

# Load dependencies
ROOT_DIR=`pwd`
source ${ROOT_DIR}/scripts/lib/common.sh

# Run script
head "Running pre push testing"

info "Running tests"
make test
mayfail "make test failed, please fix code and recommit"

exit 0
