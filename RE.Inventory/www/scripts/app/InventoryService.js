System.register(["./StockItem", "../DatabaseManager", 'rxjs/Observable'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var StockItem_1, DatabaseManager_1, Observable_1;
    var IInventoryService, InventoryService;
    return {
        setters:[
            function (StockItem_1_1) {
                StockItem_1 = StockItem_1_1;
            },
            function (DatabaseManager_1_1) {
                DatabaseManager_1 = DatabaseManager_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            IInventoryService = (function () {
                function IInventoryService() {
                }
                return IInventoryService;
            })();
            exports_1("IInventoryService", IInventoryService);
            InventoryService = (function (_super) {
                __extends(InventoryService, _super);
                function InventoryService() {
                    _super.call(this);
                    console.log('InventoryService Created');
                    this._dbHandler = new DatabaseManager_1.DatabaseHandle("Inventory.db");
                }
                InventoryService.prototype.loadStockItems = function () {
                    var self = this;
                    return Observable_1.Observable.create(function (observer) {
                        self._dbHandler.OpenDatabase().transaction(function (tr) {
                            tr.executeSql("select id,name from Inventory_Table;", [], function (tx, res) {
                                for (var i = 0; i < res.rows.length; i++) {
                                    var row = res.rows.item(i);
                                    console.log("DB RowResult Obsr " + i + " => " + JSON.stringify(row));
                                    observer.next(self.MapRowToStockItem(row));
                                }
                            }, function errorHandler(err) {
                                console.log("error in db call " + err);
                                observer.onError(err);
                            });
                        });
                    });
                };
                InventoryService.prototype.MapRowToStockItem = function (row) {
                    var item = new StockItem_1.StockItem();
                    item.Id = row['Id'];
                    item.Name = row['Name'];
                    return item;
                };
                InventoryService.prototype.getAllItems = function () {
                    var stockItems = new Array();
                    this._dbHandler.OpenDatabase().transaction(function (tr) {
                        tr.executeSql("select id,name from Inventory_Table;", [], function (tx, res) {
                            for (var i = 0; i < res.rows.length; i++) {
                                var item = new StockItem_1.StockItem();
                                var row = res.rows.item(i);
                                item.Id = row['id'];
                                item.Name = row['name'];
                                console.log("DB RowResult " + i + " => " + JSON.stringify(row));
                                stockItems.push(item);
                            }
                            ;
                        }, function (tx, error) {
                            console.log('Error in Sql' + error.message);
                            return false;
                        });
                    });
                    var dummy = new StockItem_1.StockItem();
                    dummy.Id = 77;
                    dummy.Name = "Super Mega Dummy";
                    stockItems.push(dummy);
                    return stockItems;
                };
                return InventoryService;
            })(IInventoryService);
            exports_1("InventoryService", InventoryService);
            ;
        }
    }
});
//# sourceMappingURL=InventoryService.js.map