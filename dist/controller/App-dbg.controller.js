sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"lab/PresentationSite/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("lab.PresentationSite.controller.App", {

		formatter: formatter,

		onInit: function () {

		}
	});
});