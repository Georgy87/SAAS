import { backblaze, scaleway, vultr } from '@constants/company';
import { bunny } from '@constants/company';
import { priceCalculationService } from '@services/priceСalculationService';

describe('price calculation service', () => {
  describe('storage = 50, transfer = 50', () => {
    /*  storage 50 GB, transfer 50 GB
    минимальный платеж 7$.
    цена Storage: $0.005.
    цена Transfer: $0.01.

    backblaze.com = 7$.
    bunny.net HDD = 1$, SSD = 1.5$.
    scaleway.com Multi = 0$, Single = 0$.
    vultr.com = 5$.
  */
    it('get backblaze price', () => {
      const storage = 50;
      const transfer = 50;
      const result = priceCalculationService.getBackblazePrice(storage, transfer, backblaze);
      expect(result).toEqual(7);
    });

    it('get bunny price', () => {
      const storage = 50;
      const transfer = 50;

      const resultHdd = priceCalculationService.getBunnyPrice(storage, transfer, bunny, bunny.storagePrice.hdd);
      expect(resultHdd).toEqual(1);

      const resultSsd = priceCalculationService.getBunnyPrice(storage, transfer, bunny, bunny.storagePrice.ssd);
      expect(resultSsd).toEqual(1.5);
    });

    it('get scaleway price', () => {
      const storage = 50;
      const transfer = 50;

      const isTransferLimitPrice = priceCalculationService.getTransferLimitPrice(transfer, scaleway);
      const isStorageMultyLimitPrice = priceCalculationService.getStorageLimitPrice(storage, true, scaleway);
      const isSingleLimitPrice = priceCalculationService.getStorageLimitPrice(storage, false, scaleway);

      const resultMulty = priceCalculationService.getScalewayPrice(
        storage,
        transfer,
        isTransferLimitPrice,
        isStorageMultyLimitPrice
      );

      const resultSingle = priceCalculationService.getScalewayPrice(
        storage,
        transfer,
        isTransferLimitPrice,
        isSingleLimitPrice
      );

      expect(Math.abs(resultMulty)).toEqual(0);
      expect(Math.abs(resultSingle)).toEqual(0);
    });

    it('get vultr price', () => {
      const storage = 50;
      const transfer = 50;

      const result = priceCalculationService.getVultrPrice(storage, transfer, vultr);

      expect(result).toEqual(5);
    });
  });

  describe('storage = 100, transfer = 200', () => {
    it('get backblaze price', () => {
      const storage = 100;
      const transfer = 200;
      const result = priceCalculationService.getBackblazePrice(storage, transfer, backblaze);
      expect(result).toEqual(7);
    });

    it('get bunny price', () => {
      const storage = 100;
      const transfer = 200;

      const resultHdd = priceCalculationService.getBunnyPrice(storage, transfer, bunny, bunny.storagePrice.hdd);
      expect(resultHdd).toEqual(3);

      const resultSsd = priceCalculationService.getBunnyPrice(storage, transfer, bunny, bunny.storagePrice.ssd);
      expect(resultSsd).toEqual(4);
    });

    it('get scaleway price', () => {
      const storage = 100;
      const transfer = 200;

      const isTransferLimitPrice = priceCalculationService.getTransferLimitPrice(transfer, scaleway);
      const isStorageMultyLimitPrice = priceCalculationService.getStorageLimitPrice(storage, true, scaleway);
      const isSingleLimitPrice = priceCalculationService.getStorageLimitPrice(storage, false, scaleway);

      const resultMulty = priceCalculationService.getScalewayPrice(
        storage,
        transfer,
        isTransferLimitPrice,
        isStorageMultyLimitPrice
      );

      const resultSingle = priceCalculationService.getScalewayPrice(
        storage,
        transfer,
        isTransferLimitPrice,
        isSingleLimitPrice
      );

      expect(Math.abs(resultMulty)).toEqual(4);
      expect(Math.abs(resultSingle)).toEqual(3.25);
    });

    it('get vultr price', () => {
      const storage = 100;
      const transfer = 200;

      const result = priceCalculationService.getVultrPrice(storage, transfer, vultr);

      expect(result).toEqual(5);
    });
  });

  describe('storage = 300, transfer = 300', () => {
    it('get backblaze price', () => {
      const storage = 300;
      const transfer = 300;
      const result = priceCalculationService.getBackblazePrice(storage, transfer, backblaze);
      expect(result).toEqual(7);
    });

    it('get bunny price', () => {
      const storage = 300;
      const transfer = 300;

      const resultHdd = priceCalculationService.getBunnyPrice(storage, transfer, bunny, bunny.storagePrice.hdd);
      expect(resultHdd).toEqual(6);

      const resultSsd = priceCalculationService.getBunnyPrice(storage, transfer, bunny, bunny.storagePrice.ssd);
      expect(resultSsd).toEqual(9);
    });

    it('get scaleway price', () => {
      const storage = 300;
      const transfer = 300;

      const isTransferLimitPrice = priceCalculationService.getTransferLimitPrice(transfer, scaleway);
      const isStorageMultyLimitPrice = priceCalculationService.getStorageLimitPrice(storage, true, scaleway);
      const isSingleLimitPrice = priceCalculationService.getStorageLimitPrice(storage, false, scaleway);

      const resultMulty = priceCalculationService.getScalewayPrice(
        storage,
        transfer,
        isTransferLimitPrice,
        isStorageMultyLimitPrice
      );

      const resultSingle = priceCalculationService.getScalewayPrice(
        storage,
        transfer,
        isTransferLimitPrice,
        isSingleLimitPrice
      );

      expect(Math.abs(resultMulty)).toEqual(18);
      expect(Math.abs(resultSingle)).toEqual(11.25);
    });

    it('get vultr price', () => {
      const storage = 300;
      const transfer = 300;

      const result = priceCalculationService.getVultrPrice(storage, transfer, vultr);

      expect(result).toEqual(6);
    });
  });

  describe('storage = 1000, transfer = 1000', () => {
    it('get backblaze price', () => {
      const storage = 1000;
      const transfer = 1000;
      const result = priceCalculationService.getBackblazePrice(storage, transfer, backblaze);
      expect(result).toEqual(15);
    });

    it('get bunny price', () => {
      const storage = 1000;
      const transfer = 1000;

      const resultHdd = priceCalculationService.getBunnyPrice(storage, transfer, bunny, bunny.storagePrice.hdd);
      expect(resultHdd).toEqual(10);

      const resultSsd = priceCalculationService.getBunnyPrice(storage, transfer, bunny, bunny.storagePrice.ssd);
      expect(resultSsd).toEqual(10);
    });

    it('get scaleway price', () => {
      const storage = 1000;
      const transfer = 1000;

      const isTransferLimitPrice = priceCalculationService.getTransferLimitPrice(transfer, scaleway);
      const isStorageMultyLimitPrice = priceCalculationService.getStorageLimitPrice(storage, true, scaleway);
      const isSingleLimitPrice = priceCalculationService.getStorageLimitPrice(storage, false, scaleway);

      const resultMulty = priceCalculationService.getScalewayPrice(
        storage,
        transfer,
        isTransferLimitPrice,
        isStorageMultyLimitPrice
      );

      const resultSingle = priceCalculationService.getScalewayPrice(
        storage,
        transfer,
        isTransferLimitPrice,
        isSingleLimitPrice
      );

      expect(Math.abs(resultMulty)).toEqual(74);
      expect(Math.abs(resultSingle)).toEqual(46.25);
    });

    it('get vultr price', () => {
      const storage = 1000;
      const transfer = 1000;

      const result = priceCalculationService.getVultrPrice(storage, transfer, vultr);

      expect(result).toEqual(20);
    });
  });
});
