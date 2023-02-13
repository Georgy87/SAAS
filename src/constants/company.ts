import { Backblaze, Bunny, Scaleway, Vultr } from './types';

export const backblaze: Backblaze = {
  storagePrice: 0.005,
  transferPrice: 0.01,
  minPayment: 7,
};

export const bunny: Bunny = {
  storagePrice: {
    hdd: 0.01,
    ssd: 0.02,
  },
  transferPrice: 0.01,
  maxPayment: 10,
};

export const scaleway: Scaleway = {
  storagePrice: {
    multy: {
      free: 0,
      overLimit: 0.06,
    },
    single: {
      free: 0,
      overLimit: 0.03,
    },
  },
  transferPrice: {
    free: 0,
    overLimit: 0.02,
  },
};

export const vultr: Vultr = {
  storagePrice: 0.01,
  transferPrice: 0.01,
  minPayment: 5,
};
