// PubSub
// A simple javascript pub-sub model, with arguments in the style of jQuery events.
//
// http://github.com/alegscogs/pubsub
//
// Based on Peter Higgins (https://github.com/phiggins42/bloody-jquery-plugins) 
// implementation, with changes to the style of arguments.
//
// Copyright Alex Cox, but anyone can do whatever they want with this without 
// caring about me.  
// Anyone can even tell someone else that they have to pay a lot for it, 
// because pay for worse things, like Omniture.

(function($){

  var topics = {};

  $.publish = function(){
    var args = Array.prototype.slice.call(arguments);
    var topic = args.shift();

    topics[topic] && $.each(topics[topic], function(){
      this.apply($, args);
    });
  };

  $.subscribe = function(topic, callback){
    if(!topics[topic]){
      topics[topic] = [];
    }
    topics[topic].push(callback);
    return [topic, callback];
  };

  $.unsubscribe = function(){
    var topic = arguments[0];
    topics[topic] && $.each(topics[topic], function(i){
      if(this == arguments[1]){
        topics[topic].splice(i, 1);
      }
    });
  };

})(jQuery);


