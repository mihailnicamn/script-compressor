const { execSync } = require('child_process');
const file = require('fs').readFileSync(`test.js`, 'utf16le');
execSync('node comp test.js');
const compressed = require('fs').readFileSync(`test.script`, 'utf16le');
console.log(`Test file size: ${file.length}`);
console.log(`Compressed file size: ${compressed.length}`);
console.log(`Compression ratio: ${(compressed.length / file.length).toFixed(2)}`);
console.log(`Space saved: ${(100 - (compressed.length / file.length) * 100).toFixed(2)}%`);

const VanillaStart = new Date().getTime();
execSync(`node test.js`);
const VanillaEnd = new Date().getTime();
const CompressedStart = new Date().getTime();
execSync(`node runner test.script`);
const CompressedEnd = new Date().getTime();

const VanillaTime = VanillaEnd - VanillaStart;
const CompressedTime = CompressedEnd - CompressedStart;

console.log(`Vanilla time: ${VanillaTime}ms`);
console.log(`Compressed time: ${CompressedTime}ms`);
console.log(`Time difference: ${VanillaTime - CompressedTime}ms`);
console.log(`Difference %: ${(100 - (CompressedTime / VanillaTime) * 100).toFixed(2)}%`);