sap.ui.define([
		"ns/Paramete_Routing_Extended/controller/BaseController"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("ns.Paramete_Routing_Extended.controller.Main", {
			onInit: function () {
               this.getView().setModel(this.getModel());
            },
            
            handleInfo: function(){
                this.getRouter().navTo("info");
            },

            handleSelectionChange: function(oEvent){
                var oSelectedItem = oEvent.getParameter("listItem");
                var sPath = oSelectedItem.getBindingContext().getPath();
                this.getRouter().navTo("covidData", {
                    id: sPath.slice(1)
                });
                console.log(sPath);
            }
		});
	});
