#ifdef GL_ES
 precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_texture;
uniform vec2 u_textureResolution;
uniform sampler2D u_buffer0;
uniform sampler2D u_buffer1;

vec2 scale(vec2 st, float s) {
	return (st - 0.5) * s+0.5;
}

vec2 ratio(in vec2 st, in vec2 s) {
	return mix(vec2((st.x * s.x / s.y) - (s.x * 0.5 - s.y * 0.5) / s.y, st.y),
	vec2(st.x, st.y * (s.y / s.x) - (s.y * 0.5 - s.x * 0.5) / s.x),
	step(s.x, s.y));
}

float circleSDF(vec2 st) {
	return length(st - 0.5) * 2.0;
}

vec2 sphereCoords(vec2 _st, float _scale) {
	float maxFactor = sin(1.570796327);
	vec2 uv = vec2(0.0);
	vec2 xy = 2.0 * _st.xy - 1.0;
	float d = length(xy);
	if (d < (2.0 - maxFactor)) {
		d = length(xy * maxFactor);
		float z = sqrt(1.0 - d * d);
		float r = atan(d, z) / 3.1415926535 * _scale;
		float phi = atan(xy.y, xy.x);
		uv.x = r * cos(phi) + 0.5;
		uv.y = r * sin(phi) + 0.5;
	} else {
		uv = _st.xy;
	}
	return uv;
}
vec4 sphereTexture(in sampler2D _tex, in vec2 _uv, float _time) {
	vec2 st = sphereCoords(_uv, 1.0);
	float aspect = u_textureResolution.y / u_textureResolution.x;
	st.x = fract(st.x * aspect + _time);
	return texture2D(_tex, st);
}
void main() {
	vec2 uv = gl_FragCoord.xy / u_resolution.xy;
	vec3 diff = vec3(vec2(1.0) / u_resolution.xy, 0.0);
	vec2 mouse_uv = u_mouse.xy / u_resolution.xy;
	float mouse_pointer = smoothstep(1.5, 0.5, length((mouse_uv - uv) * u_resolution));
	#if defined(BUFFER_0)
	// Ping
	vec4 center = texture2D(u_buffer1, uv);
	float top = texture2D(u_buffer1, uv - diff.zy).r;
	float left = texture2D(u_buffer1, uv - diff.xz).r;
	float right = texture2D(u_buffer1, uv + diff.xz).r;
	float bottom = texture2D(u_buffer1, uv + diff.zy).r;
	float red = -(center.g - 0.5) * 2.0 + (top + left + right + bottom - 2.0);
	red += mouse_pointer; // mouse
	red *= 0.98; // damping
	red *= step(0.1, u_time); // hacky way of clearing the buffer
	red = 0.5 + red * 0.5;
	red = clamp(red, 0.0, 1.0);
	gl_FragColor = vec4(red, center.r, 0.0, 0.0);
	#elif defined(BUFFER_1)
	// Pong
	// Note: in this example you can get away with only one buffer...
	//       still is good to show off how easy is to make another buffer
	vec4 ping = texture2D(u_buffer0, uv, 0.0);
	if (u_time < 1.0) {
		ping = vec4(vec3(0.5), 1.0);
	}
	gl_FragColor = ping;
	#else
	// Main Buffer
	vec4 ripples = texture2D(u_buffer1, uv);
	float offset = ripples.r - 0.5;
	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	st = scale(st, 0.9);
	// st = ratio(st, u_textureResolution.xy);
	st += offset;
	vec4 color = texture2D(u_texture, st, u_time * 0.01);
	color.rgb += (ripples.r - 0.5) * 2.0;
	gl_FragColor = color;
	#endif
}
