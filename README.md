# aframe-gradient-sky
A gradient sky component for the A-Frame WebVR Framework.

Check out the: [Gradient Sky Example](https://zcanter.github.io/aframe-gradient-sky/)

![A-Frame Gradient Sky](https://cloud.githubusercontent.com/assets/5613001/22364303/65a91ce2-e425-11e6-8086-c4401b15dcdb.png)

### Usage

You can load 
```html
<a-gradient-sky></a-gradient-sky>
```


#### Browser Installation

Install and use by directly including the [browser file](dist):

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