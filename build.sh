#!/bin/bash

RED='\033[1;31m'
GREEN='\033[1;32m'
BLUE='\033[1;34m'
NC='\033[0m'

# clear old file
rm -f output.zip

echo -e "\n----------------------------------------"
echo -e " ${BLUE}Packaging JavaScript${NC}"
echo -e "----------------------------------------\n"
npx rollup src/main --format iife --output temp.js
npx escompress temp.js > dist/bundle.js
rm temp.js

echo -e "\n----------------------------------------"
echo -e " ${BLUE}Zipping files${NC}"
echo -e "----------------------------------------\n"
cd dist
zip ../output.zip *

# display results
cd ../

FILE_NAME=./output.zip
BUNDLE_SIZE_BYTES=$(wc -c < "$FILE_NAME")

echo -e "\n----------------------------------------"
if [[ $BUNDLE_SIZE_BYTES -gt 13312 ]]; then
  echo -e " ${RED}Bundle is too large${NC} ($BUNDLE_SIZE_BYTES bytes)"
  rm ./output.zip
else
  echo -e " ${GREEN}Bundle is within limits${NC} ($BUNDLE_SIZE_BYTES bytes)"
fi
echo -e "----------------------------------------\n"
