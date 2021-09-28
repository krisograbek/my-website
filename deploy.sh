cp -r /home/kris/dev/krisogr/src/components/data/* /home/kris/dev/krisogr/public/data/
npm run build
cp -r /home/kris/dev/krisogr/build/* /home/kris/dev/krisograbek/
cd /home/kris/dev/krisograbek/
git add .
echo "Add the commit message"
read msg
git commit -m "$msg"
git push origin main

