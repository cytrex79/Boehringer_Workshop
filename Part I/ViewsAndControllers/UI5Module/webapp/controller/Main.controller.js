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

            },
            
            handleButtonClick: function(oEvent){
                alert("Our button was clicked");
            }
		});
	});