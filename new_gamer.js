// try to add new gamer
module.exports = async (ctx) => {
  const { text: name } = ctx.message;
  console.log({ name });
};
