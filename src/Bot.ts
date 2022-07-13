import Client from './Client';

new Client().init();
require('http').createServer((req:any, res:any) => res.end('Bot is alive!')).listen(3000)
