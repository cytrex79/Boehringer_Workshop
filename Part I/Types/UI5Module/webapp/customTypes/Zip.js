sap.ui.define([
		"sap/ui/model/SimpleType",
		"sap/ui/model/ValidateException"
	],
	function (SimpleType, ValidateException) {

		return SimpleType.extend("workshop.UI5Module.customTypes.Zip", {

			formatValue: function (oValue) {
				return oValue;
			},

			parseValue: function (oValue) {
				return oValue;
			},

			validateValue: function (oValue) {
				if (!/^(\d{4})?$/.test(oValue)) {
					throw new ValidateException("An austrian ZIP code must consist of exactly 4 numbers!");
				}
			}
		});
		
	});