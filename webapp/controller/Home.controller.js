sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("lab.PresentationSite.controller.App", {

		formatter: formatter,

		onInit: function () {

		},
		
		OnAvatarPress: function(oEvent) {
			
			var sImageUrl = this.getView().getModel().getProperty("/Infos/FullPictureUrl");
			
			var oImageDialog = new sap.m.LightBox();
			
			oImageDialog.addImageContent(
					new sap.m.LightBoxItem({ imageSrc: sImageUrl })
				);
			oImageDialog.open();
			
		},
		
		goToGithubPage: function (oEvent) {
			window.location.replace("https://github.com/Louis-Arnaud");
		},
		goToSapProfile: function (oEvent) {
			window.location.replace("https://people.sap.com/lab_pm");
		},
		goToTwitterProfile: function (oEvent) {
			window.location.replace("https://twitter.com/LAB_SAP");
		}
	});
});