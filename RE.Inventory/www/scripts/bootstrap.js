System.register(['angular2/platform/browser', 'angular2/core', './Inventory/InventoryComponentLoader'], function(exports_1) {
    var browser_1, core_1, InventoryComponentLoader_1;
    function registerModules() {
        var loader = new InventoryComponentLoader_1.InventoryComponentLoader();
        var component = loader.Component();
        var provider = new Array();
        for (var _i = 0, _a = loader.Dependencies(); _i < _a.length; _i++) {
            var dependency = _a[_i];
            provider.push(new core_1.Provider(dependency.ServiceInterface, { useClass: dependency.ServiceImplementingType }));
        }
        ;
        core_1.Injector.resolveAndCreate(provider);
        browser_1.bootstrap(component, provider).then(function (appRef) {
            browser_1.enableDebugTools(appRef);
        });
    }
    exports_1("registerModules", registerModules);
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (InventoryComponentLoader_1_1) {
                InventoryComponentLoader_1 = InventoryComponentLoader_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=bootstrap.js.map