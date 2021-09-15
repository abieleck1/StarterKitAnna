sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";
    var sViewName = "CustomersList";
    var sCreateCustomerView = "CreateCustomer";
	Opa5.createPageObjects({
		onTheCustomersList: {

			actions: {
                iPressCreate: function(){
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        matchers: new sap.ui.test.matchers.I18NText({
                            key: "createCustomer",
                            modelName: "i18n",
                            propertyName: "text"                            
                         }),
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage:"Did not find the button"
                    })                    
                }
            },

			assertions: {

				iShouldSeeTheCarousel: function () {
					return this.waitFor({
						id: "customersCarousel",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The carousel is displayed");
						},
						errorMessage: "Did not find the the carousel"
					});
                },
                iShouldSeeTheTable: function(){
                    return this.waitFor({
                        controlType: "sap.m.Table",
                        viewName: sViewName,
                        success: function(){
                            Opa5.assert.ok(true, "The table is displayed");
                        },
                        errorMessage:"Did not find the table"
                    });
                },

                iShouldSeeTheCreateButton: function(){
                    return this.waitFor({
                       controlType: "sap.m.Button",
                       matchers: new sap.ui.test.matchers.I18NText({
                            key: "createCustomer",
                            modelName: "i18n",
                            propertyName: "text"                            
                         }),
                        viewName: sViewName,
                        success: function(){
                            Opa5.assert.ok(true, "The create button is displayed");
                        },
                        errorMessage:"Did not find the button"
                    });
                },

                iShouldSeeThePage: function(){
                    return this.waitFor({
						id: "createCustomerPage",
						viewName: sCreateCustomerView,
						success: function () {
							Opa5.assert.ok(true, "The page is displayed");
						},
						errorMessage: "Did not find the the page"
					});                    
                }
			}
		}
	});

});
