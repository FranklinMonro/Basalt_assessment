#!/bin/bash

. ./0_variables.sh

HOME_PWD = $(pwd)
echo -e "$On_Red $(pwd) $NC"

if [[ "$PWD" != *":$(pwd)/web:"* ]]; then
  echo -e "$On_Green GO TO DIRECTORY $(pwd)/web $NC"
  cd web
fi

echo -e "$On_Red $(pwd) $NC"
echo -e "$On_Yellow INSTALL WEB $(pwd)/web $NC"

npm install

cd ..

echo -e "$On_Red $(pwd) $NC"

if [[ "$PWD" != *":$(pwd)/api:"* ]]; then
  echo -e "$On_Green GO TO DIRECTORY $(pwd)/api $NC"
  cd api
fi

echo -e "$On_Red $(pwd) $NC"
echo -e "$On_Yellow INSTALL API $(pwd)/web $NC"

npm install

cd ..

echo -e "$On_Red $(pwd) $NC"




