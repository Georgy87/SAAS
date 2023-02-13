import { ChangeEvent, FC } from 'react';

import styles from './Sliders.module.scss';

type PropsType = {
  storage: number;
  transfer: number;
  onChangeStorage: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTransfer: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Sliders: FC<PropsType> = ({ storage, transfer, onChangeStorage, onChangeTransfer }) => {
  return (
    <div className={styles.slidersContainer}>
      <div className={styles.sliders}>
        <div className={styles.storage}>
          <div className={styles.textBlock}>
            <span>Storage: </span>
            <span>{storage} GB</span>
          </div>

          <input
            type="range"
            min="0"
            max="1000"
            value={storage}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeStorage(e)}
          />
        </div>

        <div className={styles.storage}>
          <div className={styles.textBlock}>
            <span>Transfer: </span>
            <span>{transfer} GB</span>
          </div>

          <input
            type="range"
            min="0"
            max="1000"
            value={transfer}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeTransfer(e)}
          />
        </div>
      </div>
    </div>
  );
};
