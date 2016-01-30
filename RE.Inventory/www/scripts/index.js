System.register(['./app', './DatabaseManager'], function(exports_1) {
    var app_1, DatabaseManager_1;
    function initialize() {
        initializeCordova();
    }
    exports_1("initialize", initialize);
    function initializeCordova() {
        if (!window.cordova) {
            onDeviceReady();
        }
        else {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
    }
    function onDeviceReady() {
        console.log('Cordova: on device ready');
        new DatabaseManager_1.DatabaseManager().AssertDBsAreAvailable(["Inventory.db"], app_1.registerModules);
    }
    return {
        setters:[
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (DatabaseManager_1_1) {
                DatabaseManager_1 = DatabaseManager_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map