require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: "js/",
    paths: {
    	'jquery': 'lib/jquery',
    	'underscore': 'lib/underscore-min',
      'backbone': 'lib/backbone-min',
      'marionette' : 'lib/backbone.marionette.min',
      'migrate': 'lib/jquery-migrate-1.1.1',
      'bgstretcher': 'lib/bgstretcher',
      'mediaqueries': 'lib/css3-mediaqueries',
      'text': 'lib/text',
    },
    shim: {
      'jquery': {
        exports: '$'
      },
    	'underscore': {
	        exports: '_'
	      },
      'backbone': {
        deps: ['jquery','underscore'],
        exports: 'Backbone'
      },
      'marionette' : {
        deps : ['jquery', 'underscore', 'backbone'],
        exports : 'Marionette'
      },
      'migrate':{
        deps : ['jquery'],
      },
    },
});
require([
  'app/app',
], function(App){
  App.initialize();
});