(function (scope) {

  var VERSION = 1;
  var WHEREAMI = "DCUTLS";

  if (!scope.dcutls) {
    /**
     * Main namespace for Datacap Utils Toolkit
     *
     * @namespace dcutls
     * @type {Object}
     */
    scope.dcutls = {};
  }

  (function (VERSION, WHEREAMI, scope) {
    var packageName = "utils";
    if (!scope.dcutls[packageName] || scope.dcutls[packageName].VERSION < VERSION) {
      Object.defineProperty(scope.dcutls, packageName, {
        get: function () {
          /**
           * Contains useful functions for integration with IBM Datacap from IBM Business Process Manager.
           *
           * @namespace dcutls.utils
           * @type {Object}
           */
          var utils = {
            get whereAmI() {
              return WHEREAMI;
            },
            get VERSION() {
              return VERSION;
            }
          };

          /**
           * Decodes UTF-16 LE BOM string to UTF-8 string.
           * 
           * @memberof dcutls.utils
           * @method decodeUtf16LeBom
           * @param {string} binaryString string which data represents UTF-16 LE BOM text
           * @returns {string} decoded UTF-8 string
           */
          utils.decodeUtf16LeBom = function (binaryString) {
            var cp = [];
            for (var i = 2; i < binaryString.length; i += 2) {
              cp.push(
                binaryString.charCodeAt(i) |
                (binaryString.charCodeAt(i + 1) << 8)
              );
            }
            return String.fromCharCode.apply(String, cp);
          };
          return utils;
        }
      });
    }
  })(VERSION, WHEREAMI, scope);

})(this);
