const { program } = require('commander');
const os = require('os');

program
  .version('1.0.0')
  .description('A simple CLI to display system information');

program
  .command('cpu')
  .description('Display CPU information')
  .action(() => {
    console.log('CPU Information:');
    console.table(os.cpus());
  });

program
  .command('memory')
  .description('Display memory information')
  .action(() => {
    console.log('Memory Information:');
    console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`Free Memory: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
  });

program
  .command('os')
  .description('Display OS information')
  .action(() => {
    console.log('OS Information:');
    console.log(`OS Type: ${os.type()}`);
    console.log(`Platform: ${os.platform()}`);
    console.log(`Release: ${os.release()}`);
  });

program.parse(process.argv);