# env-obj

### Usage:

With environment:

```
foo.bar=1
foo.baz=2
foo.hello.world=hi
hello.world=ho
```

```
var envObj = require('env-obj');

var obj envObj();
```

obj is:

```
{
  foo: {
    bar: "1",
    baz: "2",
    hello: {
      world: "hi"
    }
  },
  hello: {
    world: "ho"
  }
}
```
