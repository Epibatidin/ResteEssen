import {Component, Inject, ChangeDetectionStrategy  } from 'angular2/core';
import {IInventoryService} from './InventoryService';
import {StockItem} from './StockItem';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'inventory-app',
    templateUrl: 'Templates/InventoryList.html',
    changeDetection: ChangeDetectionStrategy.OnPush
    //template: '<h1>My First {{title}} App</h1>'
})

export class InventoryComponent {
    private _inventory: IInventoryService;
    
    public componentStock: StockItem[];

    constructor(@Inject(IInventoryService) inventory: IInventoryService) {

        this.componentStock = new Array<StockItem>();
        //var self = this;
        //this.observable = Observable.create(function (observer) {
        //    setInterval(function() {
        //        //console.log("Emit of Observer");
        //        if (self.emit)
        //            observer.next(StockItem.create());
        //    }, 1000);

        //}).subscribe(r => self.componentStock.push(r));


        //setInterval(function () {
        //    if (self.emit)
        //        self.componentStock.push(StockItem.create());
        //}, 1000);

        this._inventory = inventory;
    }

    emit : boolean;

    public enableEmit() {
        this.emit = true;
    }

    public disableEmit() {
        this.emit = false;
    };

    ngOnInit() {
        console.log('InventoryComponent OnInit');

        var self = this;
        this._inventory.loadStockItems().subscribe(r => {
            //self.markForCheck()
            self.componentStock.push(r);
        });
    };

    private push(item: StockItem) {

        this.componentStock.push(item);

    }

    //ngOnInit() {
    //    this._inventory.stockItems$.subscribe(updatedTodos => this.componentStock = updatedTodos);
    //    this._inventory.loadStockItems();
    //};
}