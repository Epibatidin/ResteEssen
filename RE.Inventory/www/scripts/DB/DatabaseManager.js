System.register(["./DatabaseHandle", "../Interfaces/Toggles"], function(exports_1) {
    var DatabaseHandle_1, Toggles_1;
    var DatabaseManager;
    return {
        setters:[
            function (DatabaseHandle_1_1) {
                DatabaseHandle_1 = DatabaseHandle_1_1;
            },
            function (Toggles_1_1) {
                Toggles_1 = Toggles_1_1;
            }],
        execute: function() {
            DatabaseManager = (function () {
                function DatabaseManager() {
                }
                DatabaseManager.prototype.AssertDBsAreAvailable = function (databases, succeedCallback) {
                    this.assertAccessableDatabase(databases[0], succeedCallback);
                };
                DatabaseManager.prototype.assertAccessableDatabase = function (databasename, succeedCallback) {
                    if (Toggles_1.Toggles.IsRipple()) {
                        succeedCallback();
                        return;
                    }
                    function initDb() {
                        new DatabaseHandle_1.DatabaseHandle(databasename).OpenDatabase().transaction(function (tx) {
                            tx.executeSql("SELECT * FROM sqlite_master WHERE type='table'", [], function (tx, res) {
                                if (res.rows.length > 0) {
                                    console.log('DB availability test succeed for : ');
                                    succeedCallback();
                                }
                                else
                                    console.log('DB availability test failed - no Tables');
                            }, function () { return console.log('DB availability test failed'); });
                        });
                    }
                    ;
                    initDb();
                    return;
                    window.plugins.sqlDB.copy(databasename, 0, function () { return initDb(); }, function (e) {
                        console.log("Error Code = " + JSON.stringify(e));
                        if (e.code === 516) {
                            initDb();
                        }
                        return false;
                    });
                };
                return DatabaseManager;
            })();
            exports_1("DatabaseManager", DatabaseManager);
        }
    }
});
//# sourceMappingURL=DatabaseManager.js.map