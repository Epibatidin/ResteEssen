System.register([], function(exports_1) {
    var StockItem;
    return {
        setters:[],
        execute: function() {
            StockItem = (function () {
                function StockItem() {
                }
                StockItem.create = function () {
                    var stockItem = new StockItem();
                    stockItem.Name = "Super Dummy";
                    stockItem.Id = 77;
                    return stockItem;
                };
                return StockItem;
            })();
            exports_1("StockItem", StockItem);
            ;
        }
    }
});
//# sourceMappingURL=StockItem.js.map