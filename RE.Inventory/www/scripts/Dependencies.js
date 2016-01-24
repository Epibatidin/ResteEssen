System.register(['angular2/core', './app/InventoryService'], function(exports_1) {
    var core_1, InventoryService_1;
    var injector, s, r;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (InventoryService_1_1) {
                InventoryService_1 = InventoryService_1_1;
            }],
        execute: function() {
            injector = core_1.Injector.resolveAndCreate([
                core_1.provide(InventoryService_1.InventoryService, { useClass: InventoryService_1.InventoryService })
            ]);
            s = injector.get(new core_1.OpaqueToken("IInventoryService"));
            r = s;
        }
    }
});
//# sourceMappingURL=Dependencies.js.map