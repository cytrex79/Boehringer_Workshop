sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent",
        "sap/ui/core/routing/History"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, UIComponent, History) {
		"use strict";

		return Controller.extend("ns.Paramete_Routing_Extended.controller.BaseController", {
			getRouter: function(){
                return UIComponent.getRouterFor(this);
            },

            getModel: function(){
                return this.getOwnerComponent().oModel;
            },

            handleNavBack : function() {
                        var sPreviousHash = History.getInstance().getPreviousHash();

                        if (sPreviousHash !== undefined) {
                                history.go(-1);
                        } else {
                                this.getRouter().navTo("main", {}, true);
                        }
                }
		});
	});
