uniform vec3 bottomColor;
uniform vec3 topColor;
uniform float offset;
uniform float exponent;
varying vec3 vWorldPosition;

void main() {
    float h = normalize( vWorldPosition + offset ).y;
    float rB = bottomColor.x/255.0;
    float gB = bottomColor.y/255.0;
    float bB = bottomColor.z/255.0;
    vec3 bColor = vec3(rB,gB,bB);
    float rT = topColor.x/255.0;
    float gT = topColor.y/255.0;
    float bT = topColor.z/255.0;
    vec3 tColor = vec3(rT,gT,bT);
    gl_FragColor = vec4( mix( bColor, tColor, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );
}