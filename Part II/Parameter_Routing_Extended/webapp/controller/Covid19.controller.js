sap.ui.define([
        "ns/Paramete_Routing_Extended/controller/BaseController",
        "sap/ui/core/UIComponent"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, UIComponent) {
		"use strict";

		return Controller.extend("ns.Paramete_Routing_Extended.controller.Covid19", {
			onInit: function () {
                this.getView().setModel(this.getOwnerComponent().oModel);
               UIComponent.getRouterFor(this).getRoute("covidData").attachPatternMatched(this._patternMatch, this);
            },

            _patternMatch: function(oEvent){
                var oPage = this.byId("covid19Page");
               var iId = oEvent.getParameter("arguments").id;
               var sPath = "/" + iId;
               oPage.bindElement(sPath);
            }
		});
	});
