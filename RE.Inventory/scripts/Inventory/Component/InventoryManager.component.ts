import {Component, Inject, ChangeDetectionStrategy  } from "angular2/core";
import {IInventoryService} from "../InventoryService";
import {StockItem} from "../StockItem";
import {Observable} from "rxjs/Observable";
//import {BackgroundDirective} from '../Directives/BackgroundDirective'


@Component({
    selector: 'inventory-app',
    templateUrl: 'Templates/InventoryList.html',
    
    //directives: [BackgroundDirective],
})

export class InventoryManagerComponent {
    private _inventory: IInventoryService;
    
    public componentStock: StockItem[];

    constructor(@Inject(IInventoryService) inventory: IInventoryService) {

        this.componentStock = new Array<StockItem>();
        this._inventory = inventory;
    }

    emit : boolean;

    public enableEmit() {
        this.emit = true;
    }

    public disableEmit() {
        this.emit = false;
    };

    public deleteItem(item: StockItem): void{
        for (var i = 0; i < this.componentStock.length; i++) {
            if (this.componentStock[i].Id === item.Id) {
                this.componentStock.splice(i, 1);
                break;
            }   
        }
    }

    ngOnInit() {
        console.log('InventoryComponent OnInit');

        var self = this;
        self.componentStock.push(new StockItem());
        this._inventory.loadStockItems().subscribe(r => {
            self.componentStock.push(r as StockItem);
        });
        self.componentStock.splice(0, 1);

    };
}