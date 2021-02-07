/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"workshop/UI5Modulue/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
