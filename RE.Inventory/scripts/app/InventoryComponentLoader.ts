import {IInventoryService, InventoryService} from './InventoryService';
import {InventoryComponent} from './Inventory.component'
import {StockItem} from './StockItem';

export class DependencyConfiguration {
    ServiceInterface: any;
    ServiceImplementingType : any;
}

export class InventoryComponentLoader {
    
    Component(): any {
        return InventoryComponent;
    } 

    Dependencies(): DependencyConfiguration[] {

        var dependencies = new Array<DependencyConfiguration>();

        var inventoryService = new DependencyConfiguration();
        inventoryService.ServiceInterface = IInventoryService;
        inventoryService.ServiceImplementingType = InventoryService;
        dependencies.push(inventoryService);

        return dependencies;
    }

}