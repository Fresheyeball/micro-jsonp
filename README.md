# Micro Jsonp

Small as possible jsonp library, clocking in at 274 bytes mangled and zipped.
Request overhead of the padding has been minimized with help from Joe Hoeller, down to ~1.5ms including cleanup.

## Usage

This project only exposes one function `jsonp`, which takes 3 arguments, the request url, the name of the callback parameter, a callback function where data will be accepted.

```javascript
jsonp("http://foreignDomain.foo/bar", "callbackName", function(data){
    profit(data);
});
```

## Packaging

Feel free to add this script to the package manager of your choice. I've not gotten around to it.
