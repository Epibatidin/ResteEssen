import {bootstrap, enableDebugTools} from 'angular2/platform/browser';
import {Injector, Provider, OpaqueToken} from 'angular2/core';
import {InventoryComponentLoader} from './app/InventoryComponentLoader';

export function registerModules(): void {

    var components = new Array<any>();

    var loader = new InventoryComponentLoader();
    var component = loader.Component();

    var provider = new Array<Provider>();

    for (var dependency of loader.Dependencies()) {
        provider.push(new Provider(dependency.ServiceInterface, {useClass : dependency.ServiceImplementingType }));
    };
    Injector.resolveAndCreate(provider)
    
    bootstrap(component, provider).then((appRef) => {
        enableDebugTools(appRef)
    }); 


    //var injector = Injector.resolveAndCreate([
    //    provide(InventoryService, { useClass: InventoryService })

    //]);


    ////components.push(AppComponent);
    //components.push(InventoryComponent);

    //for (var component of components) {
    //    bootstrap(component //, //[InventoryService]
    //    )});
    //}
    
}