import {StockItem} from "./StockItem";
import {DatabaseHandle} from "../DB/DatabaseHandle";
import {Observable}from "rxjs/Observable";
import 'rxjs/add/operator/map'; // add map function to observable



export abstract class IInventoryService {

    abstract loadStockItems(): Observable<StockItem>;
}

// https://coryrylan.com/blog/angular-2-observable-data-services
export class InventoryService extends IInventoryService {
    
    private _dbHandler: DatabaseHandle;
    
    constructor() {
        super();
        this._dbHandler = new DatabaseHandle("Inventory.db");
    }

    public loadStockItems(): Observable<StockItem> {
        var self = this;

        var dbQuery = Observable.create(observer => {
            this._dbHandler.OpenDatabase().transaction(tr => {
                tr.executeSql(this.selectAllQuery(), [], (tx, res) => {
                        for (var i = 0; i < res.rows.length; i++) {
                            var row = res.rows.item(i);
                            observer.next(row);
                        }
                    },
                    err => {
                        console.log("error in db call " + JSON.stringify(err));
                        observer.onError(err);
                    });
            });
        });
        //dbQuery.forEach(r => console.log("DB RowResult Obsr => " + JSON.stringify(r)));

        var mapped = dbQuery.map(row => self.buildStockItem(row));

        return mapped;
    }

    private buildStockItem(row : Object): StockItem {
        var item = new StockItem();

        item.Id = row['Inventory_PK'];
        item.Quantity = row['Quantity'];
        item.Name = row['SingularName'];
        item.Color = row['Color'];

        return item;
    }

    private selectAllQuery() :string {
        var query;

        query = `
            SELECT Inv.Inventory_PK, Inv.Quantity, Article.SingularName, Article.PluralName, ArticleType.Color 
            FROM Inventory_TB Inv
            JOIN Article_TB Article on Article.Article_PK = inv.Article_FK
            JOIN Article_Type_TB ArticleType on Article.ArticleType_FK = ArticleType.ArticleTypeId_PK;
        `;
        return query;
    }
};