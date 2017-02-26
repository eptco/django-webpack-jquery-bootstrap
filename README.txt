This is a sample project demonstrating django-webpack-jquery-bootstrap(sass)

1 requirements
 - python, pip
 - node, npm

2. process

 - Install django and create new project

 - Webpack install and integration
   In django project folder create es6-webpack project
    - npm init
      npm install --save-dev webpack webpack-bundle-tracker babel babel-loader
    - Make folder names assets and creat index.js file in it.
    - Create webpack.config.js file under the project directory with its sample content
        please refer to http://owaislone.org/blog/webpack-plus-reactjs-and-django/
    - npm install -g webpack
    - Compile assets/index.js with webpack
        webpack --config webpack.config.js --watch
    - webpack-jquery integration
        npm install --save-dev jquery
        add this code in webpack.config.js  module.exports > plugins
            new webpack.ProvidePlugin({
              $: "jquery", 
              jQuery: "jquery", 
              jquery: "jquery"
            })
    - webpack-bootstrap(sass) integration
        npm install --save-dev bootstrap-sass
        npm install --save-dev css-loader style-loader sass-loader node-sass
        npm install --save-dev file-loader url-loader imports-loader
        add this code in webpack.config.js  module.exports > module > loaders
            { test: /\.scss?$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'] }, 
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }, 
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" }, 
            { loader: "imports-loader" }
        add this code in assets/js/index.js 
            require('imports-loader?$=jquery!bootstrap-sass/assets/stylesheets/_bootstrap.scss'); 
            require('imports-loader?$=jquery!bootstrap-sass/assets/javascripts/bootstrap.js');


 - Django integration
    - Install django webpack loader
        pip install django-webpack-loader
    - In settings.py add
    	import sys
    	import os

        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

        STATICFILES_DIRS = (
            os.path.join(BASE_DIR, 'assets'), # We do this so that django's collectstatic copies or our bundles to the STATIC_ROOT or syncs them to whatever storage we use.
        )

        WEBPACK_LOADER = {
            'DEFAULT': {
                'BUNDLE_DIR_NAME': 'bundles/',
                'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
            }
        }

        INSTALLED_APPS = (
         ...
         'webpack_loader',
        )

    - In template file
        {% load render_bundle from webpack_loader %}
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <title>Example</title>
            {% render_bundle 'main' %}
          </head>

          <body>
            <div id="react-app"></div>
          </body>
        </html>

 3. Further nodes
  - Django - webpack integration
        In webpack.config.js file you'll see the code snippet
          output: {
              path: path.resolve('./assets/bundles/'),
              filename: "[name]-[hash].js",
          },
        This code lets webpack to output main-[hash].js file on /assets/bundles folder. Which will be connected to Django settings.py via WEBPACK_LOADER (which points assets/bundles folder) and {% render_bundle 'main'%} template tag (use 'main' to load main-[hash].js)
  - Webpack - jquery integration
        Well this is easiest part. Just install jquery with npm and add plugin to webpack.config.js file
  - Webpack - bootstrap(sass) integration
        First we need sass-loader since the version we are using is sass version. So npm install sass-loader and register that loader to webpack config.
        Second bootstrap sass package has woff, tif and svg files. We also need some loaders for processing those files. Tose are file-loader(for tif|eot|svg files) and url-loader(for woff file).
        Now we are ready to import bootstrap in out index.js so just 
            require('imports-loader?$=jquery!bootstrap-sass/assets/stylesheets/_bootstrap.scss'); 
            require('imports-loader?$=jquery!bootstrap-sass/assets/javascripts/bootstrap.js');
        Here you see "imports-loader?$=jquery" This code is there to ensure that jquery has been loaded before loading bootstrap.js(which uses jquery internally)

        
