# aframe-gradient-sky
A gradient sky component for the A-Frame WebVR Framework.

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):
You can also use the cdn 
```html 
<script src="https://cdn.rawgit.com/zcanter/aframe-gradient-sky/"></script> 
```

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.3.0/aframe.min.js"></script>
  <script src="https://cdn.rawgit.com/zcanter/aframe-gradient-sky/"></script>
</head>

<body>
  <a-scene>
    <a-gradient-sky></a-gradient-sky>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-gradient-sky
```

Then register and use.

```js
require('aframe');
require('aframe-gradient-sky');
```