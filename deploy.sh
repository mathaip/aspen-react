#!/usr/bin/env bash

# enable GCP apis
gcloud services enable appengine.googleapis.com

export APP_NAME="Aspen-Nft-Dapp"
export PROJECT_ID="aspenlab"

cd aspendreact
# bootstrap app using create-react-app

# install app
npm install
npm audit fix # just in case vulnerabilities

# test it works, view in browser, then CTRL+C
npm start

# build app for production (creates build/ folder)
npm build

# create app engine config file (app.yaml)
cat > app.yaml << EOF
env: standard
runtime: nodejs10
service: app-engine-react-demo
handlers:
  - url: /static
    static_dir: build/static
  - url: /(.*\.(json|ico|js))$
    static_files: build/\1
    upload: build/.*\.(json|ico|js)$
  - url: .*
    static_files: build/index.html
    upload: build/index.html
EOF

# deploy app to app engine (if first deploy potentially select region)
gcloud app deploy --project=$PROJECT_ID --quiet

# wait several minutes then visit the URL provided in output
gcloud app browse -s $APP_NAME