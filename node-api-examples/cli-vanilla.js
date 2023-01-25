const arg = process.argv[2];

console.log(arg);

console.log(`Hello ${arg}`);

switch (arg) {
  case "-b":
    console.log(process.argv[3]);
    process.exit();
  default:
    console.log("Flag unknown");
    process.exit();
}