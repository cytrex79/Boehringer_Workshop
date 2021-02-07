sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("workshop.UI5Modulue.controller.Master", {
			onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel("model/data.json");
                this.getView().setModel(oModel);
            },
            
            handleSelectionChange: function(oEvent){
                var oTable = this.byId("employees");
                var oSelectedItem = oEvent.getParameter("selectedItem");
                var sPath = oSelectedItem.getBindingContext().getPath();
                oTable.bindElement(sPath);
                console.log(sPath);
            }
		});
	});
