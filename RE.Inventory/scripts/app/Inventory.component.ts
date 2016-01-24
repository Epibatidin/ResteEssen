import {Component, Inject} from 'angular2/core';
import {IInventoryService} from './InventoryService';
import {StockItem} from './StockItem';


@Component({
    selector: 'inventory-app',
    templateUrl: 'Templates/InventoryList.html'
    
    //template: '<h1>My First {{title}} App</h1>'
})
export class InventoryComponent {
    private _inventory: IInventoryService;
    public title = 'Inventar';
    
    constructor(@Inject(IInventoryService) inventory: IInventoryService) {
        this._inventory = inventory;
    }

    RetrieveStockItems(): StockItem[] {
        return this._inventory.getAllItems();
    }
}