System.register(["angular2/core", "../InventoryService", "../StockItem", "../../Directives/BackgroundDirective"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, InventoryService_1, StockItem_1, BackgroundDirective_1;
    var StockItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (InventoryService_1_1) {
                InventoryService_1 = InventoryService_1_1;
            },
            function (StockItem_1_1) {
                StockItem_1 = StockItem_1_1;
            },
            function (BackgroundDirective_1_1) {
                BackgroundDirective_1 = BackgroundDirective_1_1;
            }],
        execute: function() {
            StockItemComponent = (function () {
                function StockItemComponent(inventory) {
                    this._inventory = inventory;
                }
                __decorate([
                    core_1.Input("stronglyTyped"), 
                    __metadata('design:type', StockItem_1.StockItem)
                ], StockItemComponent.prototype, "stockItem", void 0);
                StockItemComponent = __decorate([
                    core_1.Component({
                        selector: 'stockItem',
                        templateUrl: 'Templates/StockItem.html',
                        directives: [BackgroundDirective_1.BackgroundDirective]
                    }),
                    __param(0, core_1.Inject(InventoryService_1.IInventoryService)), 
                    __metadata('design:paramtypes', [InventoryService_1.IInventoryService])
                ], StockItemComponent);
                return StockItemComponent;
            })();
            exports_1("StockItemComponent", StockItemComponent);
        }
    }
});
//# sourceMappingURL=StockItem.component.js.map