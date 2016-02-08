System.register(['./InventoryService', './Component/InventoryManager.component'], function(exports_1) {
    var InventoryService_1, InventoryManager_component_1;
    var DependencyConfiguration, InventoryComponentLoader;
    return {
        setters:[
            function (InventoryService_1_1) {
                InventoryService_1 = InventoryService_1_1;
            },
            function (InventoryManager_component_1_1) {
                InventoryManager_component_1 = InventoryManager_component_1_1;
            }],
        execute: function() {
            DependencyConfiguration = (function () {
                function DependencyConfiguration() {
                }
                return DependencyConfiguration;
            })();
            exports_1("DependencyConfiguration", DependencyConfiguration);
            InventoryComponentLoader = (function () {
                function InventoryComponentLoader() {
                }
                InventoryComponentLoader.prototype.Component = function () {
                    return InventoryManager_component_1.InventoryManagerComponent;
                };
                InventoryComponentLoader.prototype.Dependencies = function () {
                    var dependencies = new Array();
                    var inventoryService = new DependencyConfiguration();
                    inventoryService.ServiceInterface = InventoryService_1.IInventoryService;
                    inventoryService.ServiceImplementingType = InventoryService_1.InventoryService;
                    dependencies.push(inventoryService);
                    return dependencies;
                };
                return InventoryComponentLoader;
            })();
            exports_1("InventoryComponentLoader", InventoryComponentLoader);
        }
    }
});
//# sourceMappingURL=InventoryComponentLoader.js.map