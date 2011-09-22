//

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


