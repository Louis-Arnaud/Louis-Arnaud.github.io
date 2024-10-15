sap.ui.define(["sap/ui/core/mvc/Controller","../model/formatter","sap/ui/model/json/JSONModel","sap/ui/core/dnd/DragInfo","sap/f/dnd/GridDropInfo","sap/ui/core/library"],function(e,t,o,a,r,i){"use strict";return e.extend("lab.PresentationSite.controller.Home",{formatter:t,onInit:function(){var e=new o(sap.ui.require.toUrl("lab/PresentationSite/cardManifest.json"));this.getView().setModel(e,"manifests");var t=i.dnd.DropLayout;var n=i.dnd.DropPosition;var s=this.byId("idGridContainer");s.addDragDropConfig(new a({sourceAggregation:"items"}));s.addDragDropConfig(new r({targetAggregation:"items",dropPosition:n.Between,dropLayout:t.Horizontal,drop:function(e){var t=e.getParameter("draggedControl"),o=e.getParameter("droppedControl"),a=e.getParameter("dropPosition"),r=s.indexOfItem(t),i=s.indexOfItem(o);s.removeItem(t);if(r<i){i--}if(a==="After"){i++}s.insertItem(t,i);s.focusItem(i)}}));s.attachLayoutChange(function(e){var t=e.getParameter("layout");if(t==="layoutXS"||t==="layoutS"){s.removeStyleClass("sapUiSmallMargin");s.addStyleClass("sapUiTinyMargin")}else{s.removeStyleClass("sapUiTinyMargin");s.addStyleClass("sapUiSmallMargin")}})},OnAvatarPress:function(e){var t=this.getView().getModel().getProperty("/Infos/FullPictureUrl");var o=new sap.m.LightBox;o.addImageContent(new sap.m.LightBoxItem({imageSrc:t}));o.open()},OnCompanyPress:function(e){var t=e.getSource().getBinding("src").getContext().getObject();if(t.Website!==""){window.location.replace(t.Website)}},goToGithubPage:function(e){window.location.replace("https://github.com/Louis-Arnaud")},goToSapProfile:function(e){window.location.replace("https://people.sap.com/lab_pm")},goToTwitterProfile:function(e){window.location.replace("https://twitter.com/LAB_SAP")}})});
//# sourceMappingURL=Home.controller.js.map