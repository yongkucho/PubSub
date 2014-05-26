/*
PubSub Module

PubSub.pub("name","yongkucho");
PubSub.sub("name");
*/
var PubSub = (function(){
    var store = {};
    return {
        pub: function(topic, msg){
            store[topic] = msg;
        },
        sub: function(topic){
            return store[topic];
        },
        remove: function(topic){
            var msg = store[topic];
            delete store[topic];
            return msg;
        }
    };
}());
