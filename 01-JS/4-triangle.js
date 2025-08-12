for (i = 0; i <= 5; i++) {
  for (j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}

for (i = 5; i >= 0; i--) {
  for (j = 5; j >= i; j--) {
    process.stdout.write("*");
  }
  console.log("");
}
