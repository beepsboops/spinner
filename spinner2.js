const spinner = "|/-\|/-|";
let delay = 1000
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${spinner[i]}`)
  }, delay)
delay += 1000
}




