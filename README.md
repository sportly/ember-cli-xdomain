# ember-cli-xdomain

This ember-cli addon injects xdomain into index.html.
More info on xdomain at https://github.com/jpillora/xdomain

## Installation

```
npm install --save-dev ember-cli-xdomain
```

# Usage

Install the addon and configure as below. Note that you will need to add a proxy.html to your slave. More info here: https://github.com/jpillora/xdomain#quick-usage


# Configuration

This plugin uses the ember-cli project's configuration as defined in `config/environment.js`.

```js
// environment.js

    ENV.xdomain: {
        src: '//mydomain.com/assets/xdomain.min.js',
        slaves: {
            'http://api.example.com': '/api/*'
        },
        debug: false,
        timeout: 15e3
    }
```


### Configuration Parameters

For more detail on these please see https://github.com/jpillora/xdomain#api

* `src` (Default: `//cdn.rawgit.com/jpillora/xdomain/0.6.17/dist/xdomain.min.js`): Location of xdomain script
* `slaves` (Default: `null`): Slaves object
* `debug` (Default: `false`): When true, XDomain will log actions to console
* `timeout` (Default: `15e3`): Number of milliseconds until XDomains gives up waiting for an iframe to respond
