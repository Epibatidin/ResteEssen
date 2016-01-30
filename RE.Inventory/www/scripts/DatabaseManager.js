System.register([], function(exports_1) {
    var DatabaseManager, DatabaseHandle;
    return {
        setters:[],
        execute: function() {
            DatabaseManager = (function () {
                function DatabaseManager() {
                }
                DatabaseManager.prototype.AssertDBsAreAvailable = function (databases, succeedCallback) {
                    this.assertAccessableDatabase(databases[0], succeedCallback);
                };
                DatabaseManager.prototype.assertAccessableDatabase = function (databasename, succeedCallback) {
                    function initDb() {
                        new DatabaseHandle(databasename).OpenDatabase().transaction(function (tx) {
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
            DatabaseHandle = (function () {
                function DatabaseHandle(_dbName) {
                    this._dbName = _dbName;
                }
                DatabaseHandle.prototype.OpenDatabase = function () {
                    return sqlitePlugin.openDatabase({
                        name: this._dbName,
                        location: 2,
                        createFromLocation: 2
                    });
                };
                return DatabaseHandle;
            })();
            exports_1("DatabaseHandle", DatabaseHandle);
        }
    }
});
//# sourceMappingURL=DatabaseManager.js.map