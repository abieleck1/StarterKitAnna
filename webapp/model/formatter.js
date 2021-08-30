sap.ui.define([], function() {
    'use strict';
    return{
        formatName: function(sFirstName, SLastName){
            var TLastName = SLastName.split("-", 1);
            return sFirstName[0] + '. ' + TLastName;
        },
        formatOrdersNum: function(sOrders){
            return sOrders.length;
        }
    };
});