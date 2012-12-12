/*!
 * jQuery on/off events plugin, a jQuery plugin
 * Version v0.1
 * https://github.com/vashik/jquery.on_off
 *
 * Copyright (c) 2012 Ivan Selchenkov
 * Released under the MIT, BSD, and GPL Licenses.
 */


jQuery.fn.extend({
  off_event: function(event_name) {
    return this.each(function() {
        var $this = $(this);
        var events = $this.data('events');
        var __events = [];


        if(events && events[event_name]) {
            $(events[event_name]).each(function(key, value) {
                if(value.handler) {
                    __events.push(value.handler)
                };
            });
            $this.data('__' + event_name, __events);
        }

        $this.off(event_name);
    });
  },
  on_event: function(event_name) {
    return this.each(function() { 
        var $this = $(this);
        var __events = $this.data('__' + event_name);

        $this.off(event_name);
        
        $(__events).each(function(key, f) {
            $this.on(event_name, f);
        });

        $this.data('__' + event_name, undefined);
    });
  }
});
