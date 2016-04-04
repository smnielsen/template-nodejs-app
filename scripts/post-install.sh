#!/usr/bin/env bash

# Load dependencies
ROOT_DIR=`pwd`
source ${ROOT_DIR}/scripts/lib/common.sh

# Run script
head "Running post install"

GIT_HOOKS_DIR='.git/hooks'
if [ ! -d "$GIT_HOOKS_DIR" ]; then
	info "Creating hooks dir: $GIT_HOOKS_DIR"
	mkdir -p $GIT_HOOKS_DIR
fi

info "Setting pre-push symlink"
ln -sf ../../scripts/pre-push.sh $GIT_HOOKS_DIR/pre-push

info "Setting post-merge symlink"
ln -sf ../../scripts/post-merge.sh $GIT_HOOKS_DIR/post-merge
