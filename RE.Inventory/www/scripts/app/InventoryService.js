System.register(["./StockItem"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var StockItem_1;
    var IInventoryService, InventoryService;
    return {
        setters:[
            function (StockItem_1_1) {
                StockItem_1 = StockItem_1_1;
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
                    this._stockItems = new Array();
                    var firstItem = new StockItem_1.StockItem();
                    firstItem.Name = "FirstName";
                    var secondItem = new StockItem_1.StockItem();
                    secondItem.Name = "SecondName";
                    this._stockItems.push(firstItem);
                    this._stockItems.push(secondItem);
                }
                InventoryService.prototype.getAllItems = function () {
                    return this._stockItems;
                };
                return InventoryService;
            })(IInventoryService);
            exports_1("InventoryService", InventoryService);
            ;
        }
    }
});
//# sourceMappingURL=InventoryService.js.map