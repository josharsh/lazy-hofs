Array.prototype.lazyEvaluate = function () {
  "use strict";
  if (this == null) {
    throw new TypeError("Array.prototype.some called on null or undefined");
  }

  let obj = Object(this);
  if (!obj instanceof Array) {
    throw new TypeError("LazyEvalute called on invalid object.");
  }

  let fun = obj[1];
  let arr = obj[0];
  let key = obj[2];

  if (typeof fun !== "function") {
    throw new TypeError("Missing second parameter as function");
  }

  switch (key) {
    case "some":
      return arr.some(fun);
    case "map":
      return arr.map(fun);
    case "filter":
      return arr.filter(fun);
    case "reduce":
      let collection = arr.slice(0, arr.length - 1);
      let acc = arr[arr.length - 1];
      return collection.reduce(fun, acc);
  }
};
