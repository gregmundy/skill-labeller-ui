docker stop skill_ui
docker rm $(docker ps -aq --filter name=skill_ui)
docker build -t kwame/node-web-app .
docker run -p 4200:4200 --env-file=dispatcher.env --name skill_ui -it kwame/node-web-app
