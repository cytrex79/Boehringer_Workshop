sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("workshop.UI5Module.controller.Main", {
			onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel({
                    enabled: true,
                    text: ""
                });
                this.getView().setModel(oModel);
            },
		});
	});
