/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/Parameter_Routing/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
