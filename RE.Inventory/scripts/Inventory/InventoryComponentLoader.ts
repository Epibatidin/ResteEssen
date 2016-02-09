import {IInventoryService, InventoryService} from './InventoryService';
import {DummyInventoryService} from './DummyInventoryService';
import {InventoryManagerComponent} from './Component/InventoryManager.component'
import {StockItem} from './StockItem';
import {Toggles} from "../Interfaces/Toggles"

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

        if (Toggles.IsRipple())
            inventoryService.ServiceImplementingType = DummyInventoryService;
        else 
            inventoryService.ServiceImplementingType = InventoryService;
        

        dependencies.push(inventoryService);

        return dependencies;
    }

}