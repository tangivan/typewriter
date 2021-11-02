const sentence = "abcdefg randomspace hijklmnopqrstvuwxyz";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
setTimeout(() => {
  console.log();
}, delay);