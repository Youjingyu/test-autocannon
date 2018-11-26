an example server that reproduces the behavior: https://github.com/mcollina/autocannon/issues/177

### start 
```bash
git clone https://github.com/Youjingyu/test-autocannon.git
cd test-autocannon
yarn
npm run start
```

and then test with [autocannon](https://github.com/mcollina/autocannon)
```bash
autocannon -c 500 -a 5000 http://0.0.0.0:8334/getConfig\?pageId\=1002
```

it should throw error:
```bash
TypeError: Cannot read property 'tick' of undefined
    at EventEmitter.instance.on (/usr/local/lib/node_modules/autocannon/lib/progressTracker.js:67:57)
```

### Env
```
Node: v8.10.0
Operating System: macos high sierra 10.13.6
autocannon: v3.1.0
```

