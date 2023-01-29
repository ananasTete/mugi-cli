#!/usr/bin/env node

const { program } = require("commander");
const { require } = require("yargs");
const pkg = require("../package.json");

// 调用 parse 方法传入参数，commander 就会解析这些参数

// 默认支持 -h 或者 --help 选项，返回所有支持的选项

// 调用 version 方法传入当前版本号，注册 -V 或者 --version 选项查询版本号

// 调用 usage 方法会在调用 -h 或 --help 后显示的帮助信息的头部显示指定字符串

program
  .name(Object.keys(pkg.bin)[0])
  .usage("<command> [options]")
  .version(pkg.version)
  .option("-d, --debug", "开启 debug 模式", false)
  .parse(process.argv);

program.command();

// console.log(program.opts().version);
