System.register(["./StockItem", "../DB/DatabaseHandle", 'rxjs/Observable', 'rxjs/add/operator/map'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var StockItem_1, DatabaseHandle_1, Observable_1;
    var IInventoryService, InventoryService;
    return {
        setters:[
            function (StockItem_1_1) {
                StockItem_1 = StockItem_1_1;
            },
            function (DatabaseHandle_1_1) {
                DatabaseHandle_1 = DatabaseHandle_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
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
                    this._dbHandler = new DatabaseHandle_1.DatabaseHandle("Inventory.db");
                }
                InventoryService.prototype.loadStockItems = function () {
                    var self = this;
                    var dbQuery = Observable_1.Observable.create(function (observer) {
                        self._dbHandler.OpenDatabase().transaction(function (tr) {
                            tr.executeSql(self.selectAllQuery(), [], function (tx, res) {
                                for (var i = 0; i < res.rows.length; i++) {
                                    var row = res.rows.item(i);
                                    observer.next(row);
                                }
                            }, function errorHandler(err) {
                                console.log("error in db call " + JSON.stringify(err));
                                observer.onError(err);
                            });
                        });
                    });
                    var mapped = dbQuery.map(function (row) { return self.buildStockItem(row); });
                    return mapped;
                };
                InventoryService.prototype.buildStockItem = function (row) {
                    var item = new StockItem_1.StockItem();
                    item.Id = row['Inventory_PK'];
                    item.Quantity = row['Quantity'];
                    item.Name = row['SingularName'];
                    item.Color = row['Color'];
                    return item;
                };
                InventoryService.prototype.selectAllQuery = function () {
                    var query;
                    query = "SELECT Inv.Inventory_PK, Inv.Quantity, Article.SingularName, Article.PluralName, ArticleType.Color " +
                        "FROM Inventory_TB Inv " +
                        "JOIN Article_TB Article on Article.Article_PK = inv.Article_FK " +
                        "JOIN Article_Type_TB ArticleType on Article.ArticleType_FK = ArticleType.ArticleTypeId_PK;";
                    return query;
                };
                InventoryService.prototype.getType = function (count) {
                    var typeAsInt = count % 5;
                    switch (typeAsInt) {
                        case 0:
                            return "yellow";
                        case 1:
                            return "blue";
                        case 2:
                            return "green";
                        case 3:
                            return "red";
                        default:
                            return "grey";
                    }
                };
                return InventoryService;
            })(IInventoryService);
            exports_1("InventoryService", InventoryService);
            ;
        }
    }
});
//# sourceMappingURL=InventoryService.js.map