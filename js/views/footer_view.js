define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/footer_template.html'
], function($, _, Backbone,Marionette,footerTemplate){
  var FooterView = Marionette.ItemView.extend({
	tagName: 'div',
	className: 'privacy',
	template: _.template(footerTemplate),

	initialize: function(){
		console.log("kaixo!");
	},

});
  return FooterView;
});