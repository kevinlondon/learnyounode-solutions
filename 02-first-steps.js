var total = 0,
    i;

for (i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
}

console.log(total);
