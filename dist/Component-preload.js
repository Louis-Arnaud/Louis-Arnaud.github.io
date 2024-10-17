//@ui5-bundle lab/PresentationSite/Component-preload.js
sap.ui.require.preload({
	"lab/PresentationSite/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","./model/models"],function(e,t,i){"use strict";return e.extend("lab.PresentationSite.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.setModel(i.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"lab/PresentationSite/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","lab/PresentationSite/model/formatter"],function(t,e){"use strict";return t.extend("lab.PresentationSite.controller.App",{formatter:e,onInit:function(){}})});
},
	"lab/PresentationSite/controller/Home.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","../model/formatter","sap/ui/model/json/JSONModel","sap/ui/core/dnd/DragInfo","sap/f/dnd/GridDropInfo","sap/ui/core/library"],function(e,a,t,r,o,n){"use strict";return e.extend("lab.PresentationSite.controller.Home",{formatter:a,onInit:function(){let e=navigator.language||navigator.userLanguage;this._changeLanguage(e);var a=n.dnd.DropLayout;var t=n.dnd.DropPosition;var i=this.byId("idGridContainer");i.addDragDropConfig(new r({sourceAggregation:"items"}));i.addDragDropConfig(new o({targetAggregation:"items",dropPosition:t.Between,dropLayout:a.Horizontal,drop:function(e){var a=e.getParameter("draggedControl"),t=e.getParameter("droppedControl"),r=e.getParameter("dropPosition"),o=i.indexOfItem(a),n=i.indexOfItem(t);i.removeItem(a);if(o<n){n--}if(r==="After"){n++}i.insertItem(a,n);i.focusItem(n)}}));i.attachLayoutChange(function(e){var a=e.getParameter("layout");if(a==="layoutXS"||a==="layoutS"){i.removeStyleClass("sapUiSmallMargin");i.addStyleClass("sapUiTinyMargin")}else{i.removeStyleClass("sapUiTinyMargin");i.addStyleClass("sapUiSmallMargin")}})},_changeLanguage(e){let a=e==="fr-FR"?"cardManifest-fr.json":"cardManifest.json";let r=new t(sap.ui.require.toUrl("lab/PresentationSite/"+a));this.getView().setModel(r,"manifests")}})});
},
	"lab/PresentationSite/i18n/i18n.properties":'title=Louis-Arnaud BOUQUIN (Work in progress)\r\nappTitle=Louis-Arnaud BOUQUIN\r\nappDescription=SAP developer\r\ncontactDetails=Contact\r\nborn=Born\r\nphone=Phone\r\nemail=Email\r\naddress=Address\r\nsummary=Summary\r\nkeySkills=Key skills\r\nworkSince=First SAP experience',
	"lab/PresentationSite/i18n/i18n_fr.properties":'title=Louis-Arnaud BOUQUIN (Work in progress)\r\nappTitle=Louis-Arnaud BOUQUIN\r\nappDescription=SAP developer\r\ncontactDetails=Contact\r\nborn=N\\u00e9\r\nphone=Tel\r\nemail=Email\r\naddress=Adresse\r\nsummary=R\\u00e9sum\\u00e9\r\nkeySkills=Comp\\u00e9tences cl\\u00e9s\r\nworkSince=Premi\\u00e8re exp\\u00e9rience SAP ',
	"lab/PresentationSite/manifest.json":'{"_version":"1.1.0","sap.app":{"id":"lab.PresentationSite","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","_version":"1.3.0","sourceTemplate":{"id":"@sap/ux-app-migrator:freestyle","version":"1.14.5","toolsId":"cbf02435-d5b7-4612-a521-7ee095fb62f8"}},"sap.ui":{"technology":"UI5","fullWidth":true,"icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"_version":"1.3.0","supportedThemes":[]},"sap.ui5":{"rootView":{"viewName":"lab.PresentationSite.view.App","type":"XML","async":true,"id":"idApp"},"dependencies":{"minUI5Version":"1.129.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{},"sap.ui.integration":{},"sap.f":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"i18n/i18n"}},"":{"type":"sap.ui.model.json.JSONModel","uri":"dataSources/english-cv.json"}},"resources":{"css":[{"uri":"./css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"lab.PresentationSite.view","controlId":"idApp","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"home","target":["home"]}],"targets":{"home":{"viewName":"Home","viewId":"home","viewLevel":1,"title":"{i18n>title}"}}},"_version":"1.2.0"}}',
	"lab/PresentationSite/model/formatter.js":function(){
sap.ui.define([],function(){"use strict";return{calculateAge:function(e){var a=Date.parse(e);var t=Date.now()-a;var r=new Date(t);return Math.abs(r.getUTCFullYear()-1970)}}});
},
	"lab/PresentationSite/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"lab/PresentationSite/view/App.view.xml":'<mvc:View\r\n\tdisplayBlock="true"\r\n\txmlns="sap.m"\r\n\txmlns:mvc="sap.ui.core.mvc"><Shell appWidthLimited="false"><App id="idApp"/></Shell></mvc:View>',
	"lab/PresentationSite/view/Home.view.xml":'<mvc:View xmlns="sap.m"\r\n\txmlns:mvc="sap.ui.core.mvc"\r\n\txmlns:w="sap.ui.integration.widgets"\r\n\txmlns:f="sap.f" controllerName="lab.PresentationSite.controller.Home" displayBlock="true"><Page id="idHomePage" title="{/name}" class= "sapUiResponsivePadding--header"><content><ScrollContainer height="100%" width="100%" vertical="true"><content><f:GridContainer id="idGridContainer" class="sapUiSmallMargin" snapToRow="true"><f:layout><f:GridContainerSettings rowSize="84px" columnSize="84px" gap="8px" /></f:layout><f:layoutXS><f:GridContainerSettings rowSize="70px" columnSize="70px" gap="8px" /></f:layoutXS><w:Card manifest="{manifests>/listContent/infoCard}"><w:layoutData><f:GridContainerItemLayoutData minRows="3" columns="3" /></w:layoutData></w:Card><w:Card manifest="{manifests>/listContent/resumeCard}"><w:layoutData><f:GridContainerItemLayoutData minRows="2" columns="4" /></w:layoutData></w:Card><w:Card manifest="{manifests>/listContent/photoCard}"><w:layoutData><f:GridContainerItemLayoutData minRows="1" columns="4" /></w:layoutData></w:Card><w:Card manifest="{manifests>/listContent/keySkillsBTP}"><w:layoutData><f:GridContainerItemLayoutData minRows="4" columns="7" /></w:layoutData></w:Card><w:Card manifest="{manifests>/listContent/keySkillsECC}"><w:layoutData><f:GridContainerItemLayoutData minRows="4" columns="7" /></w:layoutData></w:Card><w:Card manifest="{manifests>/listContent/keySkillsS4}"><w:layoutData><f:GridContainerItemLayoutData minRows="4" columns="7" /></w:layoutData></w:Card></f:GridContainer></content></ScrollContainer></content></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
