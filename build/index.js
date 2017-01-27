
var vertexShader = require('./shaders/vertex.glsl');
var fragmentShader = require('./shaders/fragment.glsl')

AFRAME.registerShader('gradient', {
  schema: {
    topColor: {type: 'vec3', default: '255 0 0', is: 'uniform'},
    bottomColor: {type: 'vec3', default: '0 0 255', is: 'uniform'},
    offset: {type: 'float', default: '400', is: 'uniform'},
    exponent: {type: 'float', default: '0.6', is: 'uniform'}
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});

AFRAME.registerPrimitive('a-gradient-sky', {
    defaultComponents: {
      geometry: {
        primitive: 'sphere',
        radius: 5000,
        segmentsWidth: 64,
        segmentsHeight: 20
      },
      material: {
        shader: 'gradient'
      },
      scale: '-1 1 1'
    },

    mappings: {
      topColor: 'material.topColor',
      bottomColor: 'material.bottomColor',
      offset: 'material.offset',
      exponent: 'material.exponent'
    }
});