export function generateNoise(width: number, height: number): string {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	if (!ctx) return "";

	const size = width * height;
	const noise = new Uint8ClampedArray(size * 4); // 4 channels (RGBA)

	for (let i = 0; i < size; i++) {
		const value = Math.random() * 255;
		noise[i * 4] = value; // Red
		noise[i * 4 + 1] = value; // Green
		noise[i * 4 + 2] = value; // Blue
		noise[i * 4 + 3] = 255; // Alpha
	}

	ctx.putImageData(new ImageData(noise, width, height), 0, 0);
	return canvas.toDataURL();
}
