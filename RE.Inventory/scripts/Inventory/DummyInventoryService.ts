import {IInventoryService} from "./InventoryService"
import {StockItem} from "./StockItem";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class DummyInventoryService extends IInventoryService {


    public loadStockItems(): Observable<StockItem> {


        return null;

    }
}