#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const log = console.log;

fs.exists('./.env', (exists) => {
  if (!exists) {
    log(chalk.red('=========.env파일 생성 시작========='));
    
    fs.copy('./env.example', './.env')
      .then(() => log(chalk.blue('.env 파일 생성완료')))
      .catch(error => log(chalk.red('.env 파일 생성에 실패하였습니다. 데이빗에게 알려주세요')));
    
  } else {
    log(chalk.blue('.env가 이미 존재합니다.'));
  }
});