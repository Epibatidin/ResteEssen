System.register(["./InventoryService", "./StockItem", "rxjs/Observable", 'rxjs/add/operator/map'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var InventoryService_1, StockItem_1, Observable_1;
    var DummyInventoryService;
    return {
        setters:[
            function (InventoryService_1_1) {
                InventoryService_1 = InventoryService_1_1;
            },
            function (StockItem_1_1) {
                StockItem_1 = StockItem_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            DummyInventoryService = (function (_super) {
                __extends(DummyInventoryService, _super);
                function DummyInventoryService() {
                    _super.apply(this, arguments);
                }
                DummyInventoryService.prototype.loadStockItems = function () {
                    var dbQuery = Observable_1.Observable.create(function (observer) {
                        for (var i = 0; i < 1; i++) {
                            var item = new StockItem_1.StockItem();
                            item.Id = i;
                            item.Name = "Thos is Item No : " + i;
                            if (i % 2 === 0) {
                                item.Color = "962727";
                            }
                            observer.next(item);
                        }
                    });
                    return dbQuery;
                };
                return DummyInventoryService;
            })(InventoryService_1.IInventoryService);
            exports_1("DummyInventoryService", DummyInventoryService);
        }
    }
});
//# sourceMappingURL=DummyInventoryService.js.map