export class DatabaseHandle {

    constructor(private _dbName: string) {
        
    }

    public OpenDatabase(): Database {

        var dbCurrent_path = "/sdcard/ResteEssen/";

        // this work fine
        var connection = sqlitePlugin.openDatabase({
            name: dbCurrent_path + this._dbName,
            location: 2,
            createFromLocation: 2
            //,androidDatabaseImplementation: 2, androidLockWorkaround: 1
        });
        return connection;
    }

    // the one that requires coping
    private OpenDatabase_Old(): Database {

        var connection = sqlitePlugin.openDatabase({
            name: this._dbName,
            location: 2,
            createFromLocation: 2
            //,androidDatabaseImplementation: 2, androidLockWorkaround: 1
        });
        return connection;
    }
}