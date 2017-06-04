#!/usr/bin/env bash

DIR=$(cd $(dirname "$0") && pwd)

BASEDIR=$DIR/..
DEST_REPO_DIR=$DIR/rygim.github.io

pushd $BASEDIR

npm install
npm run build

popd

git clone git@github.com:rygim/rygim.github.io.git

pushd $DEST_REPO_DIR
git checkout master
popd

rm -rf $DEST_REPO_DIR/*
cp -r $BASEDIR/public/* $DEST_REPO_DIR/
echo "rgimmy.com" > $DEST_REPO_DIR/CNAME

pushd $DEST_REPO_DIR
git add -A .
git commit -m "deploy"
git push origin master
popd

rm -rf $DEST_REPO_DIR

