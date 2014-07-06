define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'migrate',
  'bgstretcher',
  'mediaqueries',
  'views/footer_view',
], function($,_,Backbone,Marionette,Migrate,Bgstretcher,Mediaqueries,FooterView){
    var Controller = Marionette.Controller.extend({
      initialize: function(){
        
        $('BODY').bgStretcher({
          images: ['images/slide-1.jpg','images/slide-2.jpg','images/slide-3.jpg'], 
          imageWidth: 1600, 
          imageHeight: 964, 
          resizeProportionally:true,
          slideDirection: 'N',
          slideShowSpeed: 1000,
          transitionEffect: 'fade',
          sequenceMode: 'normal',   
          pagination: '#nav'
        });
  
        var footerView = new FooterView();

        this.footerRegion = new Backbone.Marionette.Region({el: "#footer"});
        this.footerRegion.show(footerView);
      },

      main: function(){

      },

      
    });
    return Controller;
});