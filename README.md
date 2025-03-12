# Simple NES NodeJS Heroku Buildpack

A simple demonstration of how to run NES on Heroku. 

## Create your buildpack. 
To run a custom Node distribution on Heroku, take advangage of the
[custom buildpack](https://www.heroku.com/elements/buildpacks) support
they have. 

This repo demonstrates how you would do so, with the only files needed
being the two scripts in `./bin/` of this repository. These scripts are
only meant to be used as examples, but demonstrate you can parameterize
parameters such as the desired `Node version` and your `NES Access Token` 
as needed.

The instructions below assume you've appropriately published your buildpack 
at [https://github.com/example-company/example-nes-buildpack.git](https://github.com/example-company/example-nes-buildpack.git).

Please see the Heroku documentation for more information.

## Deploying your application

1. Setup an `.envrc` file with your local secrets (see `.envrc-example` for notes)

2. Ensure `.envrc` values are loaded in your environment:
```bash
source .envrc
```

3. Create your heroku app (if needed):
```bash
heroku create $HEROKU_APP
```

4. Set your NES token to your app:
```bash
heroku config:set NES_TOKEN="$NES_TOKEN" -a $HEROKU_APP
heroku config:set NES_NODE_VERSION="$NES_NODE_VERSION" -a $HEROKU_APP
heroku buildpacks:set $BUILDPACK_REPO -a $HEROKU_APP
```

