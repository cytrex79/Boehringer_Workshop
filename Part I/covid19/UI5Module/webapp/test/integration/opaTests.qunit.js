/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"training/bi/UI5Module/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
