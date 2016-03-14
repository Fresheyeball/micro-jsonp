# Micro Jsonp

Small as possible jsonp library, clocking in at 242 bytes mangled and zipped.
Request overhead of the padding has been minimized with help from Joe Hoeller, down to ~1.5ms including cleanup.

## Usage

This project only exposes one function `jsonp`, which takes 3 arguments, the request url, the name of the callback parameter, a callback function where data will be accepted.

```javascript
jsonp("http://foreignDomain.foo/bar", "callbackName", function(data){
    profit(data);
});
```

## Live example

#### Opening `example/index.html` in a browser will usually do the trick

If that fails, you may need to run some kind of file server from the root of this project. 
Any one will do, for example:

```zsh
npm install -g http-server
cd micro-jsonp
http-server -p 8000
```

or 

```zsh
cd micro-jsonp
python -m SimpleHTTPServer 8000
```

Should get you files serving at localhost. Simply navigate to `http://localhost:8000/example/` and you should have jsonp.

## Packaging

Feel free to add this script to the package manager of your choice. I've not gotten around to it.
