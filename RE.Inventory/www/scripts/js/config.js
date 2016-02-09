System.config({
    baseURL: './scripts',
    defaultJSExtensions: true,
    transpiler: 'none',
    globalEvaluationScope: false,
    map: {
        stockItem: './scripts/Inventory/StockItem.js',
        InventoryService: './scripts/Inventory/InventoryService.js',
        DummyInventoryService: './scripts/Inventory/DummyInventoryService.js',
        Index: './scripts/index.js'
    }
});
