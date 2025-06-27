NEXTAUTH_SECRET from openssl rand -base64 32
docker pull ap95071/rotingfronttest
docker run \
--name phoenix-front \
--network roting-network \
-e NEXTAUTH_SECRET=GlwEZYFUuyG4t/gOKYYGWwZ+2UiER70FLzsY7HhSRFg= \
-p 3000:3000 \
-d ap95071/rotingfronttest:latest

docker logs -f phoenix-front

docker stop phoenix-front && docker rm phoenix-front