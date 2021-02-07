sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/UIComponent"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, UIComponent) {
		"use strict";

		return Controller.extend("ns.Static_Routing.controller.Main", {
			onInit: function () {
                var oModel = new JSONModel("model/data.json");
                oModel.setSizeLimit(500);
                oModel = this.getView().setModel(oModel);
                this.getView().setModel(oModel);
            },
            
            handleInfo: function(){
                UIComponent.getRouterFor(this).navTo("info");
            }
		});
	});
