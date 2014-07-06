define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'controller'
], function($, _, Backbone,Marionette,Controller){
    var Mycontroller = Mycontroller || new Controller();
    var Router =  Marionette.AppRouter.extend({
        controller: Mycontroller,
        appRoutes: {
          "": "main",
        },
    });
  return Router;
});