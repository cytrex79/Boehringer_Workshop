sap.ui.define([], function(){
    return{
        upperCase:function(sValue){
            return sValue.toUpperCase();
        },

        camelCase:function(sValue){
            var aWords = sValue.split(' ');
            var sNewValue = "";
            aWords.forEach(element => {
                var sCamelElement = element.charAt(0).toUpperCase() + element.slice(1);
                sNewValue += sCamelElement + ' ';
            });

            return sNewValue.trim(); 
        }
    }
});