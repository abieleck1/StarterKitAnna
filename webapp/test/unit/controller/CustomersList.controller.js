/*global QUnit*/

sap.ui.define([
	"stk/starterkit/controller/CustomersList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CustomersList Controller");

	QUnit.test("I should test the CustomersList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
