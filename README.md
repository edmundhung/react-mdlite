react-mdlite
========================================================
React wrappers for Material Design Lite (MDL) components


Installation
------------

### npm + webpack/browserify

```
$ npm install react-mdlite
```

Please also include the required [MDL](http://www.getmdl.io/) script and theme.

```
<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.teal-red.min.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<script src="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js"></script>
```

To import it,

```
// With ES6 transpiler
import { Button, Textfield, Toggle } from 'react-mdlite';

// Without ES6 transpiler
var ReactMdLite = require('react-mdlite');
var Button = ReactMdLite.Button;
var Textfield = ReactMdLite.Textfield;
var Toggle = ReactMdLite.Toggle;
```

Components supported
--------------------
With referred to this [article](http://quaintous.com/2015/07/09/react-components-with-mdl/), following upgradable MDL Components are currently supported. Except [Layouts](http://www.getmdl.io/components/index.html#layout-section/layout)

* [Button](http://www.getmdl.io/components/index.html#buttons-section)
* [Checkbox](http://www.getmdl.io/components/index.html#toggles-section/checkbox)
* [Icon Toggle](http://www.getmdl.io/components/index.html#toggles-section/icon-toggle)
* [Menu](http://www.getmdl.io/components/index.html#menus-section)
* [Progress](http://www.getmdl.io/components/index.html#loading-section/progress)
* [Radio](http://www.getmdl.io/components/index.html#toggles-section/radio)
* [Slider](http://www.getmdl.io/components/index.html#sliders-section)
* [Spinner](http://www.getmdl.io/components/index.html#loading-section/spinner)
* [Switch](http://www.getmdl.io/components/index.html#toggles-section/switch)
* [Tabs](http://www.getmdl.io/components/index.html#layout-section/tabs)
* [Text field](http://www.getmdl.io/components/index.html#textfields-section)
* [Tooltip](http://www.getmdl.io/components/index.html#tooltips-section)

There are also non-upgradable components supported.

* [Badges](http://www.getmdl.io/components/index.html#badges-section)
* [Cards](http://www.getmdl.io/components/index.html#cards-section)
* [Grid](http://www.getmdl.io/components/index.html#layout-section/grid)
* [Icon](https://www.google.com/design/icons/)

Todo
----
* Support [Navigation layouts](http://www.getmdl.io/components/index.html#layout-section/layout)
* Support [Footer](http://www.getmdl.io/components/index.html#layout-section/footer)
* Demo Site

License
-------

The MIT License (MIT)

Copyright (c) 2015 Edmund Hung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
