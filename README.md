# yojik

Simple logging tool. By default, all messages are not shown in the production build (this is determined by the environment of Node).

## How?

`npm i yojik`

### ...and?

```js
import log from 'yojik';

log('test'); // -> console.log('test')

log('test', 'info'); // -> console.info('test')

log('test', 'info', true); // -> console.info('test'), but this message will be shown in the production build.
```
