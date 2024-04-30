/**
 * display the message Welcome to Holberton School, what is your name?
 * @author Jackson Njoroge <https://github.com/254jack>
 */
process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
