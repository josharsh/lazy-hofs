Array.prototype.lazySome = function (fun) {
  "use strict";

  if (this == null) {
    throw new TypeError("Array.prototype.some called on null or undefined");
  }

  if (typeof fun !== "function") {
    throw new TypeError("Argument is not a function");
  }

  var obj = Object(this);
  var len = obj.length >>> 0;

  return [obj, fun, "some"];
};

Array.prototype.lazyMap = function (fun) {
  "use strict";

  if (this == null) {
    throw new TypeError("Array.prototype.map called on null or undefined");
  }

  if (typeof fun !== "function") {
    throw new TypeError("Argument is not a function");
  }

  var obj = Object(this);
  var len = obj.length >>> 0;

  return [obj, fun, "map"];
};

Array.prototype.lazyFilter = function (fun) {
  "use strict";

  if (this == null) {
    throw new TypeError("Array.prototype.filter called on null or undefined");
  }

  if (typeof fun !== "function") {
    throw new TypeError("Argument is not a function");
  }

  var obj = Object(this);
  var len = obj.length >>> 0;

  return [obj, fun, "filter"];
};

Array.prototype.lazyReduce = function (fun, acc) {
  "use strict";

  if (this == null) {
    throw new TypeError("Array.prototype.reduce called on null or undefined");
  }

  if (typeof fun !== "function") {
    throw new TypeError("Argument is not a function");
  }

  var obj = Object(this);
  obj.push(acc);
  var len = obj.length >>> 0;

  return [obj, fun, "reduce"];
};
