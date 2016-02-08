import {Component, Inject, Input} from "angular2/core";
import {IInventoryService} from "../InventoryService";
import {StockItem} from "../StockItem";
//https://angular.io/docs/ts/latest/guide/architecture.html
@Component({
    selector: 'stockItem',
    templateUrl: 'Templates/StockItem.html',
    directives: [StockItemComponent]
})

export class StockItemComponent {
    private _inventory: IInventoryService;
    
    @Input() stockItem: StockItem;

    constructor(@Inject(IInventoryService) inventory: IInventoryService) {        
        this._inventory = inventory;
    }
}


