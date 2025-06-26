NEXTAUTH_SECRET from openssl rand -base64 32
docker run \
--name phoenix-front \
--network roting-network \
-e NEXTAUTH_SECRET=
-p 3000:3000 \
-d ap95071/rotingfronttest:latest

docker logs -f phoenix-front

docker stop phoenix-front && docker rm phoenix-front