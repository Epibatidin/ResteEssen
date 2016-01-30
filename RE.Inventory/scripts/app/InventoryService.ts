import {StockItem} from "./StockItem"
import {DatabaseHandle} from "../DatabaseManager";
import {Observable} from 'rxjs/Observable';

//var Rx = require('rx');
//var Rx = require('rx'),
//    //fs = require('fs');

export abstract class IInventoryService {
    
    abstract loadStockItems(): Observable<StockItem>; 
    abstract getAllItems(): StockItem[];
}
// https://coryrylan.com/blog/angular-2-observable-data-services
export class InventoryService extends IInventoryService {
    
    private _dbHandler: DatabaseHandle;
    
    constructor() {
        super();
        console.log('InventoryService Created');
        this._dbHandler = new DatabaseHandle("Inventory.db");
    }

    loadStockItems(): Observable<StockItem> {

        var self = this;

        return Observable.create(function(observer) {
            self._dbHandler.OpenDatabase().transaction(tr => {
                tr.executeSql("select id,name from Inventory_Table;", [], (tx, res) => {
                        for (var i = 0; i < res.rows.length; i++) {
                            var row = res.rows.item(i);
                            console.log("DB RowResult Obsr " + i + " => " + JSON.stringify(row));
                            observer.next(self.MapRowToStockItem(row));
                        }
                    },
                    function errorHandler(err) {
                        console.log("error in db call " + err);
                        observer.onError(err);
                    });
            });
        });
    }

    private MapRowToStockItem(row : Object): StockItem {
        var item = new StockItem();
        item.Id = row['Id'];
        item.Name = row['Name'];

        return item;
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