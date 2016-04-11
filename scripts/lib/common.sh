#!/usr/bin/env bash
###########################################
# Add the following to the top of your scripts
#
# # Load dependencies
# ROOT_DIR=`pwd`
# source ${ROOT_DIR}/scripts/lib/common.sh $1
#
############################################

COLOR_RED="\033[0;31m"
COLOR_GREEN="\033[0;32m"
COLOR_YELLOW="\033[0;33m"
COLOR_DEFAULT="\033[0;39m"

COLOR_BOLD="\033[0;1m"

COLOR_END="\033[0m"

log() {
    echo "$(date '+%Y-%m-%d %H:%M') $@" 1>&2;
}

mayfail() {
    if [ $1 -ne 0 ]; then
        error "$2"
        exit 1
    fi
}

ok() {
  local tip=$1
  printf "$COLOR_GREEN"
  printf "      ✔ $tip "
  printf "$COLOR_END"
  echo ""
}

head() {
  echo ""
  echo -n "-----> "
  printf "$COLOR_BOLD"
  printf "$*"
  printf "$COLOR_END"
  echo ""
}

info() {
  local tip=$1
  #echo "`date +\"%M:%S\"`  $*"
  printf "       $tip \n"
}

warn() {
  local tip=$1
  printf "$COLOR_YELLOW"
  printf "        $tip"
  printf "$COLOR_END"
  echo ""
}

warning() {
  local tip=$1
  echo ""
  printf "$COLOR_YELLOW"
  printf "        WARNING: $tip"
  printf "$COLOR_END"
  echo ""
}

error() {
  local tip=$1
  local tip2=$2
  printf "$COLOR_RED"
  printf "        ERROR: $tip"
  printf "$COLOR_END"
  echo ""
  printf "$COLOR_RED"
  printf "        $tip2"
  printf "$COLOR_END"
  echo ""
  echo ""
  echo ""
}

verified() {
  local tip=$1
  printf "$COLOR_GREEN"
  printf "      ✔ verified $tip "
  printf "$COLOR_END"
  echo ""
}
