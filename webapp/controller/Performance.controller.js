sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    // "stk/starterkit/model/formatter"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.Performance", {
            // formatter: Formatter,


            onInit: function () {

            },
            handleNavButtonPress: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomersList");
            },

            onMotivate: function (oEvent) {
                // var oModel = new sap.ui.model.JSONModel();
                // oModel.loadData("/Evilinsult/generate_insult.php",{
                //     lang: "en",
                //     type: "json"
                // }).then(function(){
                //     var sBody = oModel.getData().insult;
                //    sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                // })
                var oSource = oEvent.getSource();
                //    MessageToast.show("success");
                $.ajax({
                    url: "/generate_insult.php",
                    data: {
                        lang: "en",
                        type: "json"
                    },

                    success: function (oResponse) {
                             MessageToast.show("success");
                        var oEmployee = oSource.getBindingContext().getObject();
                        var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@aniatest.com";
                        var sSubject = "Good job!";
                        var sBody = oResponse.insult;
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    }
                })
            }
        });
    });