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

		return Controller.extend("ns.Parameter_Routing.controller.Main", {
			onInit: function () {
               this.getView().setModel(this.getOwnerComponent().oModel);
            },
            
            handleInfo: function(){
                UIComponent.getRouterFor(this).navTo("info");
            },

            handleSelectionChange: function(oEvent){
                var oSelectedItem = oEvent.getParameter("listItem");
                var sPath = oSelectedItem.getBindingContext().getPath();
                UIComponent.getRouterFor(this).navTo("covidData", {
                    id: sPath.slice(1)
                });
                console.log(sPath);
            }
		});
	});
