#!/bin/bash
docker login -u="$HEROKU_REGISTRY_USER" -p="$HEROKU_REGISTRY_PASS" $HEROKU_REGISTRY
docker tag $REPO/$APP_NAME:$TAG $HEROKU_REGISTRY/$APP_NAME/web
docker push $HEROKU_REGISTRY/$APP_NAME/web