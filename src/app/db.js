import Redis from 'ioredis';

const state = {
  db: null,
};

export const MODE_TEST = 'mode_test';
export const MODE_PRODUCTION = 'mode_production';

export const connect = mode => {
  state.db = new Redis();

  if (mode === MODE_TEST) {
    state.db.select(15);
  }
};

export const get = () => {
  return state.db;
};
