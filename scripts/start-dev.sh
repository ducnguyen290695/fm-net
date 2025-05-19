#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

check_package() {
    if ! yarn global list | grep $1 >/dev/null 2>&1; then
        yarn global add $1
        echo -e "${GREEN}Package $1 is installed globally.!${NC}"
    fi
}

start_dev() {
    check_package "json-server@0.17.3"

    echo -e "${GREEN}Starting vite server & json server...${NC}"
    next dev &
    if [[ "$(uname)" == "Darwin" ]]; then
        yarn merge-db:mac
    else
        yarn merge-db
    fi
    npx json-server --port 5000 --delay 500 --watch ./server_fake/db.json &
    wait
}

start_dev
