#!/bin/bash

# Variables
BRANCH=master
TEST_BRANCH=development

# Parse options
while getopts ":th" opt; do
  case ${opt} in
    t) 
      echo "Deploying test"
      BRANCH=$TEST_BRANCH
      ;;
    \?)
      echo "Deploying production"
      ;;
  esac
done

cd ~/bwx
git stash
git pull
git checkout $BRANCH
yarn install
yarn build
if [[ -d /var/www/html ]]
then
    rm -R /var/www/html
fi
cp -R build/ /var/www/html
chmod u+x /var/www/html/