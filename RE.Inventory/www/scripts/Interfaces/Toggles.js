System.register([], function(exports_1) {
    var Toggles;
    return {
        setters:[],
        execute: function() {
            Toggles = (function () {
                function Toggles() {
                }
                Toggles.IsRipple = function () {
                    if (window.parent && window.parent.ripple)
                        return true;
                    return false;
                };
                return Toggles;
            })();
            exports_1("Toggles", Toggles);
        }
    }
});
//# sourceMappingURL=Toggles.js.map