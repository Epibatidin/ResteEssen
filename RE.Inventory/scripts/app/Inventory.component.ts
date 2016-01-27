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

    public StockData: StockItem[];

    constructor( @Inject(IInventoryService) inventory: IInventoryService) {
        this.StockData = new Array<StockItem>();

        this._inventory = inventory;
    }

    executeQuery(): void {
        for (var item of this._inventory.getAllItems()) {

            this.StockData.push(item);
        }


    }


    RetrieveStockItems(): StockItem[] {
        return null;
    }
}