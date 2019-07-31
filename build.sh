#!/bin/bash
echo "Compiling Vue project"
npm run build

echo "Copying dist files"
rm -rf ../gpuvmem-prod/css
rm -rf ../gpuvmem-prod/fonts
rm -rf ../gpuvmem-prod/img
rm -rf ../gpuvmem-prod/js
rm  ../gpuvmem-prod/favicon.ico
rm  ../gpuvmem-prod/icon.png
rm  ../gpuvmem-prod/index.html

cp -rf dist/* ../gpuvmem-prod
cd ../gpuvmem-prod

ls
git branch

CURRENTDATE=`date +"%Y-%m-%d %T"`

git add .
git commit -m "PROD: ${CURRENTDATE}"
git push
