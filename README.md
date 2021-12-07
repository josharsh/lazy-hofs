# lazy-hofs
Lazy higher order functions in javascript!
<img src="http://frontpagemeews.com/wp-content/uploads/2018/12/lazy-cat-cover-750x517.png" height="50%"/>

## No! It's not what the picture says!
It Brings lazy evaluation to higher order functions in javascript

## How to Use 
##### Install the package
```bash
npm i lazy-hofs
```

### Add to your project
```js
require("lazy-hofs");
```
## Docs
### lazySome()
```js
let arr = [1, 2, 3, 4, 5, 6];
let ref = arr.lazySome((it) => {
  return it === 9;
});
arr.push(9);
let result = ref.lazyEvaluate();
console.log(result);
```

### lazyMap()
```js

let arr = [1, 2, 3, 4, 5, 6];
let ref = arr.lazyMap((it) => {
  return it * 9;
});
arr.push(9);
let result = ref.lazyEvaluate();
console.log(result);
```

### lazyFilter()
```js
let arr = [1, 2, 3, 4, 5, 6];
let ref = arr.lazyFilter((it) => {
  return it % 2 === 0;
});
arr.push(9);
let result = ref.lazyEvaluate();
console.log(result);
```

### lazyReduce()
```js
let arr = [1, 2, 3, 4, 5, 6];
let ref = arr.lazyReduce((it, acc) => {
  return (acc += it);
}, 0);
arr.push(9);
let result = ref.lazyEvaluate();
console.log(result);
```