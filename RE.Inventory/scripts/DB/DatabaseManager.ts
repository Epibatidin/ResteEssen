import {DatabaseHandle} from "./DatabaseHandle"


export class DatabaseManager {
    
    public AssertDBsAreAvailable(databases: string[], succeedCallback: any) : void {
        this.assertAccessableDatabase(databases[0], succeedCallback);
    }

    private assertAccessableDatabase(databasename: string, succeedCallback: any) {
        
        function initDb() {
            new DatabaseHandle(databasename).OpenDatabase().transaction(tx => {
                tx.executeSql("SELECT * FROM sqlite_master WHERE type='table'", [],
                    (tx, res) => {
                        if (res.rows.length > 0) {
                            console.log('DB availability test succeed for : ');
                            succeedCallback();
                        } else
                            console.log('DB availability test failed - no Tables');
                    },
                    () => console.log('DB availability test failed')
                );
            });
        };

        initDb();
        return;
        window.plugins.sqlDB.copy(databasename, 0, () => initDb(), e => {
            console.log("Error Code = " + JSON.stringify(e));
            if (e.code === 516) {
                initDb();
            }
            return false;
        });


        //if (this.cleanCopy) {
        //    console.log('trying to delete db');
        //    window.plugins.sqlDB.remove("Inventory.db", 0, function () {
        //        //open db and run your queries
        //        //db = window.sqlitePlugin.openDatabase({ name: "demo.db" });
        //        console.log('Delete succeed');
        //    }, function copyerror(e) {
        //        console.log("Delete Failed Error Code = " + JSON.stringify(e));
        //    });
        //}
    }
}