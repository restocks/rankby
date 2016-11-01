# rankby
rankby is a tiny package that ranks arrays of objects in a decending manner. it handles ties even!

## usage

`npm install rankby`

in your code, use rankby like this:

```js
let rankedObject = rankby(object, key);
```

## example with simple object

```js
const rankby = require('rankby');

let simple = [{ score: 1 }, { score: 2 }, { score: 4 }, { score: 5 }];
simple = rankby(simple, 'score');
console.log(simple);
=> [{ score: 5, rank: 1 }, { score: 4, rank: 2 }, { score: 2, rank: 3 }, { score: 1, rank: 4 }]
```

## example with ties
```js
let ties = [{ score: 1 }, { score: 2 }, { score: 5 }, { score: 5 }];
ties = rankby(ties, 'score');
console.log(ties);
=> [{ score: 5, rank: 1 }, { score: 5, rank: 1 }, { score: 2, rank: 3 }, { score: 1, rank: 4 }]
```

### license

MIT
