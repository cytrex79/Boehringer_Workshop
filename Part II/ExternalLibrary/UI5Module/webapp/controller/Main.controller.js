sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("workshop.UI5Module.controller.Main", {
			onInit: function () {
                var day = moment().add(14, 'days');
                var dayDefault = day.format("dddd");
                var dayDE = day.locale('de').format("dddd");

                var dayOne = moment().add(-1, 'quaters');
                var dayEN = day.locale('en').format("dddd, MMMM Do YYYY, h:mm:ss a");

                var oModel = new JSONModel({
                    dayDefault: dayDefault,
                    dayDE: dayDE,
                    dayEN: dayEN
                });

                this.getView().setModel(oModel);

			}
		});
	});
