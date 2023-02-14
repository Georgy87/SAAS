import { act, fireEvent, render, screen } from '@testing-library/react';

import { MainPage } from '@pages/MainPage';

describe('SLIDERS', () => {
  it('should call onChangeTransfer when the storage slider is changed', async () => {
    const { getByTestId } = render(<MainPage />);

    const transfer = getByTestId('input-transfer') as HTMLInputElement;
    const transferTextLabel = getByTestId('text-transfer');

    expect(transfer).toBeTruthy();

    act(() => fireEvent.change(transfer, { target: { value: '3' } }));

    expect(transfer.value).toBe('3');
    expect(transferTextLabel.textContent).toBe('3 GB');
  });

  it('should call onChangeStorage when the storage slider is changed', async () => {
    const { getByTestId } = render(<MainPage />);

    const storage = getByTestId('input-storage') as HTMLInputElement;
    const storageTextLabel = getByTestId('text-storage');
    expect(storage).toBeTruthy();

    act(() => fireEvent.change(storage, { target: { value: '332' } }));

    expect(storage.value).toBe('332');
    expect(storageTextLabel.textContent).toBe('332 GB');
  });
});
