/* jshint esversion: 6 */


export const FRAGMENT_SHADER = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_pow;
uniform float u_top;
uniform float u_strength;
uniform sampler2D u_texture;
uniform vec2 u_textureResolution;

float random(vec2 st) {
	return fract(sin(dot(st.xy + cos(u_time), vec2(12.9898 , 78.233))) * (43758.5453123));
}

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	float rr = u_resolution.x / u_resolution.y;
	float tr = u_textureResolution.x / u_textureResolution.y;
	if (tr > rr) {
		st.x = ((st.x - 0.5) * rr / tr) + 0.5;
	} else {
		st.y = ((st.y - 0.5) / rr * tr) + 0.5;
	}
	float top = u_top / u_resolution.y;
	vec2 mx = u_mouse / u_resolution;
	vec2 dx = vec2(cos(u_time * 0.5), sin(u_time * 0.6)) * 4.0 * u_strength;

	float noise = random(st) * 0.08;

	float c = cos((st.x + dx.x - mx.x * 0.4) * 6.0 + 2.0 * dx.y);
	float s = sin((st.y + top + dx.y - mx.y * 0.2) * 3.0 + 1.0 * dx.x);
	float b = (length(vec2(c + s, c)) + 2.0) * u_strength;

	float center = length(st - 0.5);
	vec2 sty = vec2(st.x, st.y + top);
	float scale = 0.95 * (1.0 - b * center * u_pow);
	vec2 stb = (sty - 0.5) * scale + 0.5;

	vec3 video = texture2D(u_texture, stb).rgb;
	vec3 bulge = vec3(b);

	vec3 color = vec3(0.0);
	color = vec3(video - noise);
	// color = vec3(video);
	// color = vec3(video - bulge * 0.1 - noise);
	// color = vec3(bulge);
	// color = vec3(noise);
	// color = vec3(center);
	// color = vec3(u_pow * center);
	// color = vec3(bulge - noise) * length(st - 0.5) * u_pow;

	gl_FragColor = vec4(color, 1.0);
}
`;
