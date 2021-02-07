sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("training.bi.UI5Module.controller.Main", {
			onInit: function () {
                this.getView().setModel(new JSONModel("https://disease.sh/v3/covid-19/countries?yesterday=false&sort=cases"));
                this.getView().getModel().setSizeLimit(500);

                var sTitle = this.getView().getModel("i18n").getResourceBundle().getText("title", [" by Rainer Haider", "2021"]);
                this.byId("page").setTitle(sTitle);
            },
            
            toDateTime:function (sValue){
                var myDate = new Date(sValue);
                return myDate.toLocaleString();
            }
		});
	});
