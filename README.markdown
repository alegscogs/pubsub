
A simple javascript pub-sub model, with arbitrary arguments in the style of javascript function arguments and jQuery events.

If you find yourself binding and triggering the same event interaction on the document node, you can probably save yourself some overhead by skipping the DOM and using pub-sub.

Usage
-----

```javascript
    $.subscribe('status', function(thing, state){
      console.log(thing, state);
    });

    var object = { name : null };

    $.publish('validation', object, 'invalid');
```

License
-------

Copyright Alex Cox, but anyone can do whatever they want with this without worrying about me.  
Based on Peter Higgins (https://github.com/phiggins42/bloody-jquery-plugins) implementation, with changes to the style of arguments.

