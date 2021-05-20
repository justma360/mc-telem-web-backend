import pino from 'pino';

const Console = pino({
  prettyPrint: { colorize: true },
});

export default Console;
