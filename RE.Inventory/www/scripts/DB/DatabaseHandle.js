System.register([], function(exports_1) {
    var DatabaseHandle;
    return {
        setters:[],
        execute: function() {
            DatabaseHandle = (function () {
                function DatabaseHandle(_dbName) {
                    this._dbName = _dbName;
                }
                DatabaseHandle.prototype.OpenDatabase = function () {
                    var dbCurrent_path = "/sdcard/ResteEssen/";
                    var connection = sqlitePlugin.openDatabase({
                        name: dbCurrent_path + this._dbName,
                        location: 2,
                        createFromLocation: 2
                    });
                    return connection;
                };
                DatabaseHandle.prototype.OpenDatabase_Old = function () {
                    var connection = sqlitePlugin.openDatabase({
                        name: this._dbName,
                        location: 2,
                        createFromLocation: 2
                    });
                    return connection;
                };
                return DatabaseHandle;
            })();
            exports_1("DatabaseHandle", DatabaseHandle);
        }
    }
});
//# sourceMappingURL=DatabaseHandle.js.map