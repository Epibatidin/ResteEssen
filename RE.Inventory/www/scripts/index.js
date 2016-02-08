System.register(['./bootstrap', './DB/DatabaseManager'], function(exports_1) {
    var bootstrap_1, DatabaseManager_1;
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
        new DatabaseManager_1.DatabaseManager().AssertDBsAreAvailable(["Inventory.db"], bootstrap_1.registerModules);
    }
    return {
        setters:[
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (DatabaseManager_1_1) {
                DatabaseManager_1 = DatabaseManager_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map