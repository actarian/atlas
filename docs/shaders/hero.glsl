#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_pow;
uniform float u_top;
uniform sampler2D u_texture;
uniform vec2 u_textureResolution;

float random(vec2 st) {
	return fract(sin(dot(st.xy, vec2(12.9898 , 78.233))) * (43758.5453123 + cos(u_time)));
}

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	float rr = u_resolution.x / u_resolution.y;
	float tr = u_textureResolution.x / u_textureResolution.y;
	st.y = st.y / rr * tr;
	float top = u_top / u_resolution.y;
	vec2 mx = u_mouse / u_resolution;
	vec2 dx = vec2(cos(u_time * 0.5), sin(u_time * 0.6)) * 0.1;

	float c = cos((st.x + dx.x - mx.x * 0.4) * 6.0 + 2.0 * dx.y);
	float s = sin((st.y + top + dx.y - mx.y * 0.2) * 3.0 + 1.0 * dx.x);
	float b = (length(vec2(c + s, c)) + 2.0) * 0.1;

	float center = length(st - 0.5);

	vec2 sty = vec2(st.x, st.y + top);
	float scale = 0.95 * (1.0 - b * center * u_pow);
	vec2 stb = (sty - 0.5) * scale + 0.5;

	vec3 video = texture2D(u_texture, stb).rgb;

	float noise = random(st) * 0.05;

	vec3 bulge = vec3(b);

	vec3 color = vec3(0.0);
	color = vec3(video - bulge * 0.1 - noise);
	// color = vec3(noise);
	// color = vec3(center);
	// color = vec3(bulge - noise) * length(st - 0.5) * u_pow;
	// color = vec3(video);
	// color = vec3(u_pow * center);

	gl_FragColor = vec4(color, 1.0);
}
