sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("lab.PresentationSite.controller.App", {

		formatter: formatter,

		onInit: function () {

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