sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("workshop.UI5Module.controller.Main", {
			onInit: function () {
                var oModel = new JSONModel("model/data.json");
                this.getView().setModel(oModel);
                
                var sTitle = this.getView().getModel("i18n").getResourceBundle().getText("title", ["Rainer Haider"]);
                var oPage = this.byId("page");
                oPage.setTitle(sTitle);
			}
		});
	});
