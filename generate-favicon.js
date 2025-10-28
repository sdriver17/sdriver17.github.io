const fs = require('fs');

// Create a simple 32x32 PNG with the accent color
const width = 32;
const height = 32;
const channels = 4; // RGBA

// Create PNG header and data
const png = Buffer.alloc(8 + 12 + 13 + 12 + (height * (1 + width * channels)) + 12);

// PNG signature
png.write('\x89PNG\r\n\x1a\n', 0, 'binary');

// IHDR chunk
let pos = 8;
png.writeUInt32BE(13, pos); pos += 4; // Length
png.write('IHDR', pos, 'ascii'); pos += 4;
png.writeUInt32BE(width, pos); pos += 4;
png.writeUInt32BE(height, pos); pos += 4;
png.writeUInt8(8, pos++); // Bit depth
png.writeUInt8(6, pos++); // Color type (RGBA)
png.writeUInt8(0, pos++); // Compression
png.writeUInt8(0, pos++); // Filter
png.writeUInt8(0, pos++); // Interlace
png.writeUInt32BE(0, pos); pos += 4; // CRC (simplified)

// IDAT chunk
const color = { r: 0x4A, g: 0x9B, b: 0x7F, a: 0xFF };
const scanlineSize = 1 + width * channels;
const dataSize = height * scanlineSize;

png.writeUInt32BE(dataSize, pos); pos += 4;
png.write('IDAT', pos, 'ascii'); pos += 4;

for (let y = 0; y < height; y++) {
  png.writeUInt8(0, pos++); // Filter type
  for (let x = 0; x < width; x++) {
    png.writeUInt8(color.r, pos++);
    png.writeUInt8(color.g, pos++);
    png.writeUInt8(color.b, pos++);
    png.writeUInt8(color.a, pos++);
  }
}

png.writeUInt32BE(0, pos); pos += 4; // CRC

// IEND chunk
png.writeUInt32BE(0, pos); pos += 4;
png.write('IEND', pos, 'ascii'); pos += 4;
png.writeUInt32BE(0, pos);

fs.writeFileSync('public/favicon-temp.png', png);
console.log('Created favicon-temp.png');
