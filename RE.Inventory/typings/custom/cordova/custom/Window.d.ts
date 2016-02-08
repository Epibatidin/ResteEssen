

interface IPlugins {

    //pushNotification: PushNotification;
    sqlDB: sqlDB;
}


interface Window {    

    sqlitePlugin: sqlitePlugin;
    plugins: IPlugins;

}




declare var window: Window;