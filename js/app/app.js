define([
  'jquery',
  'underscore',
  'backbone',
  'routers/router',
], function($,_,Backbone,Router){
    var initialize = function(){
      var router = new Router();
      Backbone.history.start();
    }
    return {
      initialize: initialize
    };
});