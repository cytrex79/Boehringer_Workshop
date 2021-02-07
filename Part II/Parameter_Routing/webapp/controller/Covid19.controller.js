sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, UIComponent) {
		"use strict";

		return Controller.extend("ns.Parameter_Routing.controller.Covid19", {
			onInit: function () {
                this.getView().setModel(this.getOwnerComponent().oModel);
               UIComponent.getRouterFor(this).getRoute("covidData").attachPatternMatched(this._patternMatch, this);
            },

            _patternMatch: function(oEvent){
                var oTable = this.byId("covid19DataTable");
               var iId = oEvent.getParameter("arguments").id;
               var sPath = "/" + iId;
               oTable.bindElement(sPath);
            }
		});
	});
