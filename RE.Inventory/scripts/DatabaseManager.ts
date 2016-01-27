
export class DatabaseManager {
    
    public AssertDBsAreAvailable(databases: string[], succeedCallback: any) : void {
        this.assertAccessableDatabase(databases[0], succeedCallback);
    }

    public OpenDatabase(databasename: string) : Database {

        return sqlitePlugin.openDatabase({
            name: databasename,
            location: 2,
            createFromLocation: 2
            //,androidDatabaseImplementation: 2, androidLockWorkaround: 1
        });
    }

    private assertAccessableDatabase(databasename: string, succeedCallback : any) {
        var self = this;
        function initDb() {
            self.OpenDatabase(databasename).transaction(tx => {
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
        }

        window.plugins.sqlDB.copy(databasename, 0, () => initDb(), e => {
            console.log("Error Code = " + JSON.stringify(e));
            if (e.code === 516) {
                initDb();
            }
            return false;
        });
    }
}