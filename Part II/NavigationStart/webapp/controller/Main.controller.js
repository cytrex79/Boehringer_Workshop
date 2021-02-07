sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("workshop.NavigationStart.controller.Main", {
			onInit: function () {

            },
            
            handleNavigation: function(){
                var oNavigationService = null;

                if (sap.ushell && sap.ushell.Container){
                    oNavigationService = sap.ushell.Container.getService("CrossApplicationNavigation");
                    var oTarget = { 
                        target: { 
                            semanticObject: "Workshop", 
                            action: "display"}, 
                            params : {}
                        };

                    oNavigationService.isNavigationSupported([oTarget]).done(function(aResponse){
                        if (aResponse[0].supported){
                            oNavigationService.toExternal(oTarget);
                        } else {
                            MessageToast.show("Shell available but Navigation for Target is not supported");
                        }
                    });                   
                } else{
                    MessageToast.show("Shell is not available. App only works in Fiori Launchpad");
                }
            }
		});
	});
