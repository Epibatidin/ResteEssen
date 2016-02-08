System.register(["./InventoryService", 'rxjs/add/operator/map'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var InventoryService_1;
    var DummyInventoryService;
    return {
        setters:[
            function (InventoryService_1_1) {
                InventoryService_1 = InventoryService_1_1;
            },
            function (_1) {}],
        execute: function() {
            DummyInventoryService = (function (_super) {
                __extends(DummyInventoryService, _super);
                function DummyInventoryService() {
                    _super.apply(this, arguments);
                }
                DummyInventoryService.prototype.loadStockItems = function () {
                    return null;
                };
                return DummyInventoryService;
            })(InventoryService_1.IInventoryService);
            exports_1("DummyInventoryService", DummyInventoryService);
        }
    }
});
//# sourceMappingURL=DummyInventoryService.js.map