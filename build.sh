#!/usr/bin/env bash

uglifyjs -m -- src/jsonp.js > src/jsonp.min.js

# use zopfli for better compression if available
if type "zopfli" &> /dev/null; then
  zopfli --gzip --i100 src/jsonp.min.js
else
  gzip -1 -c src/jsonp.min.js > src/jsonp.min.js.gz
fi
