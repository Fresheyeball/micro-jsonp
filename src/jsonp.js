function jsonp(url, key, callback) {

    var
        doc =
            document,

        head =
            doc.head,

        script =
            doc.createElement("script"),

        // generate minimally unique name for callback function
        callbackName =
            "f" + Math.round(Math.random() * Date.now());

    // set request url
    script
        .setAttribute("src",
        /*  add callback parameter to the url
            where key is the parameter key supplied
            and callbackName is the parameter value */
        (url + (url.indexOf("?") > 0 ? "&" : "?")
             + key + "=" + callbackName));

    /*  place jsonp callback on window,
        the script sent by the server should call this
        function as it was passed as a url parameter */
    window[callbackName] =
        function(json){

            // suicide
            window[callbackName] =
                undefined;

            // clean up script tag created for request
            setTimeout(function(){
                head
                    .removeChild(script);

            }, 0);

            // hand data back to the user
            callback(json);

        };

    // actually make the request
    head
        .appendChild(script);

}
