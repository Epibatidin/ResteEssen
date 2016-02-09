import {IInventoryService} from "./InventoryService"
import {StockItem} from "./StockItem";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class DummyInventoryService extends IInventoryService {


    public loadStockItems(): Observable<StockItem> {

        var dbQuery = Observable.create(observer => {

            for (var i = 0; i < 1; i++) {

                var item = new StockItem();
                item.Id = i;
                item.Name = "Thos is Item No : " + i;
                
                if (i % 2 === 0) {
                    item.Color = "962727";
                }

                observer.next(item);
            }
        });


        return dbQuery;

    }
}