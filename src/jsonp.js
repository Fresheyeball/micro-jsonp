function jsonp(url, key, callback) {

    var appendParam = function(url, key, param){
            return url
                + (url.indexOf("?") > 0 ? "&" : "?")
                + key + "=" + param;
        },

        createScript = function(url, callback){
            var doc = document,
                head = doc.head,
                script = doc.createElement("script");

            script
            .setAttribute("src", url);

            head
            .appendChild(script);

            callback(function(){
                setTimeout(function(){
                    head
                    .removeChild(script);
                }, 0);
            });
        },

        q =
            "q" + Math.round(Math.random() * Date.now());

    createScript(
        appendParam(url, key, q), function(remove){
            window[q] =
                function(json){
                    window[q] = undefined;
                    remove();
                    callback(json);
                };
        });
}
