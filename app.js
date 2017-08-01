const Telegraf = require('telegraf');
require('dotenv').config();
const new_gamer = require('./new_gamer');

const expectHandlers = {
  new_gamer,
} 
 
const app = new Telegraf(process.env.BOT_TOKEN);
app.state = {};

app.command('start', ({ from, reply }) => {
  console.log('start', from)
  return reply(`Добро пожаловать!
    Этот бот будет вести рейтинг Эло 
      по настольному теннису`);
});
app.command('help', (ctx) => {
  ctx.reply('You can add gamers with command /add_gamer');
});
app.use((ctx, next) => {
  if (ctx.from.id === 249377954) {
    ctx.state.role = 'admin';
    ctx.state.admin = true;
  } else {
    ctx.state.role = 'user';
  }

  return next();
});
app.command('add_gamer', async (ctx) => {
  if (!ctx.state.admin) {
    ctx.reply(`not yet, sorry, ${ctx.state.role}`);
  }
  ctx.reply('what is his name?');
  app.state.expect = 'new_gamer';

  return ctx;
});

app.on('text', async (ctx) => {
  const { expect } = app.state;
  if (!expectHandlers[expect]) {
    ctx.reply(`command or text not found
    /help`);
    return ctx;
  }

  const response = await expectHandlers[expect](ctx);
  app.state.expect = null;
  return response;
});

app.startPolling();
console.log('bot started');
