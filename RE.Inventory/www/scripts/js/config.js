System.config({
    baseURL: './scripts',
    defaultJSExtensions: true,
    transpiler: 'none',
    globalEvaluationScope: false,
    map: {
        stockItem: './scripts/app/StockItem.js',
        InventoryService: './scripts/app/InventoryService.js',
        Index: './scripts/index.js'
    }
});
