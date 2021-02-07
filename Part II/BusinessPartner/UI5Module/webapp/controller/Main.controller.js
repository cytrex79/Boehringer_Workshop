sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Fragment, MessageToast, JSONModel) {
		"use strict";

		return Controller.extend("workshop.UI5Module.controller.Main", {
			onInit: function () {
                var oHelperModel = new JSONModel({
                    edit: false                    
                });
                this.getView().setModel(oHelperModel, "helper");
            },
            
            handleSelectionChange: function(oEvent){
                this.getView().getModel("helper").setProperty("/edit", true);
                var oItem = oEvent.getParameter("listItem");
                var oCtx = oItem.getBindingContext();
                var oDialog = this._loadFragment(oCtx);                
            },

            handleCreate: function(){
                this.getView().getModel("helper").setProperty("/edit", false);
               var oCtx = this.getView().getModel().createEntry("/BusinessPartnerSet", {
                   properties: {
                        BpRole: "01",
                        EmailAddress:"",
                        CompanyName:"",
                        CurrencyCode:"EUR",
                        City:"",
                        Street:"",
                        Country: "DE",
                        AddressType: "02"
                   }
                });
                this._loadFragment(oCtx);
            },

            handleDelete: function(){
                var that = this;
                var oObject = this.byId("dialog").getBindingContext().getObject();
                this.getView().getModel().remove("/BusinessPartnerSet('" + oObject.BpId +  "')", {
                    success: function(oResponse){
                        MessageToast.show("Businesspartner deleted successfully");
                        that.byId("dialog").close();
                        that.getView().getModel().refresh();
                    },
                    error: function(oError){
                        MessageToast.show("Error deleting Businesspartner");
                        that.byId("dialog").close();
                        that.getView().getModel().refresh();
                    }
                });           
            },

            handleClose: function(){
                this.byId("dialog").close();
            },

            handleSave: function(){
                var that = this;
                var oObject = this.byId("dialog").getBindingContext().getObject();
                this.getView().getModel().create("/BusinessPartnerSet", oObject, {
                    success: function(oResponse){
                        MessageToast.show("Businesspartner created successfully");
                        that.byId("dialog").close();
                        that.getView().getModel().refresh();
                    },
                    error: function(oError){
                        MessageToast.show("Error createing Businesspartner");
                        that.byId("dialog").close();
                        that.getView().getModel().refresh();
                    }
                });
            },

            _loadFragment: function(oContext){
                var oView = this.getView();
                if (!this.byId("dialog")){
                    Fragment.load({
                        id: oView.getId(),
                        name: "workshop.UI5Module.fragments.Dialog",
                        type: "XML",
                        controller: this
                    }).then(function(oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.setBindingContext(oContext);
                        oDialog.open();
                        
                    });
                }else{
                    // @ts-ignore
                    var oDialog = this.byId("dialog");
                    oDialog.setBindingContext(oContext);
                    oDialog.open();
                }
            }
		});
	});
