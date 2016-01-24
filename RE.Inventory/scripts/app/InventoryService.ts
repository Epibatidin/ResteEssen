import {StockItem} from "./StockItem"

export abstract class IInventoryService {
    abstract getAllItems(): StockItem[];
}

export class InventoryService extends IInventoryService {

    private _stockItems: StockItem[];

    constructor() {
        super();
        this._stockItems = new Array<StockItem>();

        var firstItem = new StockItem();
        firstItem.Name = "FirstName";

        var secondItem = new StockItem();
        secondItem.Name = "SecondName";

        this._stockItems.push(firstItem);
        this._stockItems.push(secondItem);
    }

    getAllItems(): StockItem[] {
        return this._stockItems;
    }
};