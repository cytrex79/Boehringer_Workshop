sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.Fragment} Fragment
     */
	function (Controller, Fragment) {
		"use strict";

		return Controller.extend("workshop.UI5Module.controller.Main", {
			onInit: function () {

            },

             handleButtonPress: function(oEvent){
                var oView = this.getView();
                if (!this.byId("dialog")){
                    Fragment.load({
                        id: oView.getId(),
                        name: "workshop.UI5Module.fragments.Dialog",
                        type: "XML",
                        controller: this
                    }).then(function(oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                }else{
                    // @ts-ignore
                    this.byId("dialog").open();
                }
            },

            handleClosePress: function(oEvent){
                // @ts-ignore
                this.byId("dialog").close();
            }
		});
	});
