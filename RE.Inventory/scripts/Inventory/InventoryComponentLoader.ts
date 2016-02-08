import {IInventoryService,InventoryService} from './InventoryService';
import {InventoryManagerComponent} from './Component/InventoryManager.component'
import {StockItem} from './StockItem';

export class DependencyConfiguration {
    ServiceInterface: any;
    ServiceImplementingType : any;
}

export class InventoryComponentLoader {
    
    Component(): any {
        return InventoryManagerComponent;
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