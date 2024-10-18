sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/dnd/DragInfo",
	"sap/f/dnd/GridDropInfo",
	"sap/ui/core/library"
], function (Controller, formatter, JSONModel, DragInfo, GridDropInfo, coreLibrary) {
	"use strict";

	return Controller.extend("lab.PresentationSite.controller.Home", {

		formatter: formatter,

		onInit: function () {

			// get default user language
			let sDefaultLanguage = navigator.language || navigator.userLanguage;

			let oConfigModel = new JSONModel({
				language: sDefaultLanguage,
				theme: "light"
			});

			this.getView().setModel(oConfigModel, "config");

			// Init cards with default language
			this._changeLanguage(sDefaultLanguage);

			// shortcut for sap.ui.core.dnd.DropLayout
			var DropLayout = coreLibrary.dnd.DropLayout;

			// shortcut for sap.ui.core.dnd.DropPosition
			var DropPosition = coreLibrary.dnd.DropPosition;

			var oGrid = this.byId("idGridContainer");

			oGrid.addDragDropConfig(new DragInfo({
				sourceAggregation: "items"
			}));

			oGrid.addDragDropConfig(new GridDropInfo({
				targetAggregation: "items",
				dropPosition: DropPosition.Between,
				dropLayout: DropLayout.Horizontal,
				drop: function (oInfo) {
					var oDragged = oInfo.getParameter("draggedControl"),
						oDropped = oInfo.getParameter("droppedControl"),
						sInsertPosition = oInfo.getParameter("dropPosition"),
						iDragPosition = oGrid.indexOfItem(oDragged),
						iDropPosition = oGrid.indexOfItem(oDropped);

					oGrid.removeItem(oDragged);

					if (iDragPosition < iDropPosition) {
						iDropPosition--;
					}

					if (sInsertPosition === "After") {
						iDropPosition++;
					}

					oGrid.insertItem(oDragged, iDropPosition);
					oGrid.focusItem(iDropPosition);
				}
			}));

			// Use smaller margin around grid when on smaller screens
			oGrid.attachLayoutChange(function (oEvent) {
				var sLayout = oEvent.getParameter("layout");

				if (sLayout === "layoutXS" || sLayout === "layoutS") {
					oGrid.removeStyleClass("sapUiSmallMargin");
					oGrid.addStyleClass("sapUiTinyMargin");
				} else {
					oGrid.removeStyleClass("sapUiTinyMargin");
					oGrid.addStyleClass("sapUiSmallMargin");
				}
			});

		},

		onChangeLanguage: function() {

			let oConfig = this.getView().getModel("config").getProperty("/");

			this._changeLanguage(oConfig.language);

		},

		onChangeTheme: function() {

			let oConfig = this.getView().getModel("config").getProperty("/");

			this._changeTheme(oConfig.theme);

		},

		_changeLanguage(sSelectedLang) {

			let manifestFile = sSelectedLang.substr(0, 2) === 'fr' ? 'cardManifest-fr.json' : 'cardManifest.json';

			let oCardManifests = new JSONModel(sap.ui.require.toUrl("lab/PresentationSite/" + manifestFile));
			this.getView().setModel(oCardManifests, "manifests");
			sap.ui.getCore().getConfiguration().setLanguage(sSelectedLang);

		},

		_changeTheme: function(sTheme) {

			var sThemeName = (sTheme === "dark") ? "sap_horizon_dark" : "sap_horizon";
			sap.ui.getCore().applyTheme(sThemeName);
		}

	});
});