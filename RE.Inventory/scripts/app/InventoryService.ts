import {StockItem} from "./StockItem"
import {DatabaseHandle} from "../DatabaseManager";

export abstract class IInventoryService {
    abstract getAllItems(): StockItem[];
}

export class InventoryService extends IInventoryService {
    
    private _dbHandler: DatabaseHandle;

    constructor() {
        super();
        console.log('InventoryService Created');
        this._dbHandler = new DatabaseHandle("Inventory.db");
    }

    getAllItems(): StockItem[] {
        var stockItems = new Array<StockItem>();
        
        this._dbHandler.OpenDatabase().transaction(tr => {
            tr.executeSql("select id,name from Inventory_Table;", [], (tx, res) => {
                for (var i = 0; i < res.rows.length; i++) {
                    var item = new StockItem();
                    var row = res.rows.item(i);
                    item.Id = row['id'];
                    item.Name = row['name'];

                    console.log("DB RowResult " + i + " => " + JSON.stringify(row));

                    stockItems.push(item);
                };
            }, (tx, error) => {
                console.log('Error in Sql' + error.message);
                return false;
            });
        });

        var dummy = new StockItem();
        dummy.Id = 77;
        dummy.Name = "Super Mega Dummy";

        stockItems.push(dummy);

        return stockItems;
    }

};