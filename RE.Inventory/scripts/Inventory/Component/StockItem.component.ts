import {Component, Inject, Input} from "angular2/core";
import {IInventoryService} from "../InventoryService";
import {StockItem} from "../StockItem";
import {BackgroundDirective} from "../../Directives/BackgroundDirective";

//https://angular.io/docs/ts/latest/guide/architecture.html
@Component({
    selector: 'stockItem',
    templateUrl: 'Templates/StockItem.html',
    directives: [BackgroundDirective]
})

export class StockItemComponent {
    private _inventory: IInventoryService;

    @Input("stronglyTyped") public stockItem: StockItem;

    constructor(@Inject(IInventoryService) inventory: IInventoryService) {        
        this._inventory = inventory;
    }

   

}


//howYouReadInClass: howYouDefineInHtml
//So, you may as well do the following:

//@Component({
//    selector: 'my-component',
//    properties: {
//        'greetingJS:greetingHTML'
//  }
//})
//@View({
//    template: '{{greeting}} world!'
//})
//class App {
//    set greetingJS(value) {
//        this.greeting = value;
//    }
//    constructor() {

//    }
//}

