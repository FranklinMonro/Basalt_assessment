#!/bin/sh

. ./0_variables.sh

echo -e "$On_Red $(pwd) $NC"

if [[ "$PWD" != *":$(pwd)/web:"* ]]; then
  echo -e "$On_Green GO TO DIRECTORY $(pwd)/web $NC"
  cd web
fi

echo -e "$On_Red $(pwd) $NC"
echo -e "$On_Blue RUN WEB $(pwd)/web $NC"

ng s