#!/usr/bin/env bash

START_TIME_STR=$(date '+%H:%M:%S')
START_TIME=$(date +%s)
# Load dependencies
ROOT_DIR=`pwd`
source ${ROOT_DIR}/scripts/lib/common.sh

# Run script
head "Pre-push validation"

# head "Linting tests"
# make lint
# mayfail $? "make lint failed, please fix code and recommit"

head "Unit tests"
make test
mayfail $? "make test failed, please fix code and recommit"

END_TIME=$(date +%s)
info ""
echo "------------------------------------------------------------"
info ""
ok "PREPUSH - Successful!"
info "${START_TIME_STR} -> `date '+%H:%M:%S'`"
info ""
info "Total:   ~$(( $END_TIME - $START_TIME ))s "
info ""
echo "------------------------------------------------------------"

exit 0
