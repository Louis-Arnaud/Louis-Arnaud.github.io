sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("lab.PresentationSite.controller.Main", {
		onInit: function () {},
		
		goToGithubPage: function (oEvent) {
			window.location.replace("https://github.com/Louis-Arnaud");
		}
	});
});