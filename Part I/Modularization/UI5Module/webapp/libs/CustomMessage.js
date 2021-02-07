sap.ui.define([
    "sap/m/MessageBox",
    "workshop/UI5Module/libs/FormatOptions"
    ], function(MessageBox, FormatOptions){
        return{
            show: function(sMessage, sTitle){
                MessageBox.show(FormatOptions.camelCase(sMessage),{
                    title: FormatOptions.upperCase(sTitle)
                });
            }
        }
    });