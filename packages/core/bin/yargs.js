#!/usr/bin/env node

const yargs = require("yargs/yargs");

const argv = process.argv.slice(2);
const pkg = require("../package.json");
const context = {
  mugiVersion: pkg.version,
};

const cli = yargs(argv);

cli
  .usage("usage: <command> [options]")
  .epilogue("your footer description")
  .demandCommand(
    1,
    "A command is required. pass --help to see all available commands and options"
  )
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth())
  .group(["h", "v"], "global options")
  .command(
    "init [name]",
    "init project",
    (yargs) => {
      yargs.option("name", {
        type: "string",
        describe: "Name of the project",
      });
    },
    (argv) => {
      console.log(argv);
    }
  )
  .command({
    command: "list",
    aliases: ["ll", "ls", "la"],
    description: "List local packages",
    builder: (yargs) => {},
    handler: (argv) => {
      console.log(argv);
    },
  })
  .recommendCommands()
  .fail((err, msg) => {
    console.log("err", err);
    console.log("msg", msg);
  })
  .strict().parse(argv, context);



