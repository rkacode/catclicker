var require = {
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        "jquery-te-1.4.0.js" : { "deps" :['jquery'] }
    },
    baseUrl : 'js',
    paths: {
        "jquery" : "lib/jquery/jquery-2.1.4",
        "bootstrap" :  "lib/bootstrap/bootstrap-3.3.5",
        'knockout' : 'lib/knockout/knockout-3.3.0',
        'widget' : 'component/widget',
        'jquery-te' : 'lib/jquery/jquery-te-1.4.0'
    }
};