#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_texture;
uniform vec2 u_textureResolution;

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	float x = u_mouse.x / u_resolution.x;
	float y = u_mouse.y / u_resolution.y;
	st.x += cos(u_time * 0.5 + x) * 0.02 + sin(length(st - 0.5)) * 0.1;
	st.y += sin(u_time * 0.6 - y) * 0.02;
	vec3 color = texture2D(u_texture, st).rgb;
	gl_FragColor = vec4(color.rgb, 1.0);
}
