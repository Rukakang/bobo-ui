rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:bobojier/bobo-ui-website.git &&
git branch -M main &&
git push -f -u origin main &&
cd -
echo https://bobojier.gitee.io/bobo-ui-website/index.html#/