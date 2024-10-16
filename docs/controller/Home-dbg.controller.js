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

			var oCardManifests = new JSONModel(sap.ui.require.toUrl("lab/PresentationSite/cardManifest.json"));
			this.getView().setModel(oCardManifests, "manifests");

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

		OnAvatarPress: function (oEvent) {

			var sImageUrl = this.getView().getModel().getProperty("/Infos/FullPictureUrl");

			var oImageDialog = new sap.m.LightBox();

			oImageDialog.addImageContent(
				new sap.m.LightBoxItem({
					imageSrc: sImageUrl
				})
			);
			oImageDialog.open();

		},

		OnCompanyPress: function (oEvent) {
			var oWorkExperience = oEvent.getSource().getBinding("src").getContext().getObject();
			if (oWorkExperience.Website !== "") {
				window.location.replace(oWorkExperience.Website);
			}
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