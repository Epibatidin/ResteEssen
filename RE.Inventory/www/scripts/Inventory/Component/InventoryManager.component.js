System.register(["angular2/core", "../InventoryService", "../StockItem"], function(exports_1) {
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
    var core_1, InventoryService_1, StockItem_1;
    var InventoryManagerComponent;
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
            }],
        execute: function() {
            InventoryManagerComponent = (function () {
                function InventoryManagerComponent(inventory) {
                    this.componentStock = new Array();
                    this._inventory = inventory;
                }
                InventoryManagerComponent.prototype.enableEmit = function () {
                    this.emit = true;
                };
                InventoryManagerComponent.prototype.disableEmit = function () {
                    this.emit = false;
                };
                ;
                InventoryManagerComponent.prototype.deleteItem = function (item) {
                    for (var i = 0; i < this.componentStock.length; i++) {
                        if (this.componentStock[i].Id === item.Id) {
                            this.componentStock.splice(i, 1);
                            break;
                        }
                    }
                };
                InventoryManagerComponent.prototype.ngOnInit = function () {
                    console.log('InventoryComponent OnInit');
                    var self = this;
                    self.componentStock.push(new StockItem_1.StockItem());
                    this._inventory.loadStockItems().subscribe(function (r) {
                        self.componentStock.push(r);
                    });
                    self.componentStock.splice(0, 1);
                };
                ;
                InventoryManagerComponent = __decorate([
                    core_1.Component({
                        selector: 'inventory-app',
                        templateUrl: 'Templates/InventoryList.html',
                    }),
                    __param(0, core_1.Inject(InventoryService_1.IInventoryService)), 
                    __metadata('design:paramtypes', [InventoryService_1.IInventoryService])
                ], InventoryManagerComponent);
                return InventoryManagerComponent;
            })();
            exports_1("InventoryManagerComponent", InventoryManagerComponent);
        }
    }
});
//# sourceMappingURL=InventoryManager.component.js.map