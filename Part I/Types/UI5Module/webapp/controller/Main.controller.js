sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "workshop/UI5Module/customTypes/Zip"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("workshop.UI5Module.controller.Main", {
			onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                var oView = this.getView();
                oView.setModel(oModel);
                sap.ui.getCore().getMessageManager().registerObject(oView, true);
			}
		});
	});
