define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
], function($,_,Backbone,Marionette){
    var Controller = Marionette.Controller.extend({
      initialize: function(){
          
      },

      main: function(){
        alert("kaixo!");
      },

      
    });
    return Controller;
});