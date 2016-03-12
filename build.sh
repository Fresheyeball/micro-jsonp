uglifyjs -m -- src/jsonp.js > src/jsonp.min.js
gzip -1 -c src/jsonp.min.js > src/jsonp.min.js.gz
