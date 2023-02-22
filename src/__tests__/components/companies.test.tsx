import { fireEvent, render, renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Companies } from '@components/Companies';
import { canvasService } from '@services/canvasService';
import { ICompanies } from '@constants/types';
import { CANVAS_COLORS } from '@constants/canvas';
import { screens } from '@constants/screens';
import { useWindowSize } from '@hooks/useWindowSize';

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  return {
    ...originalModule,
    // useState: jest.fn(),
    useEffect: jest.fn(),
    useContext: jest.fn(),
    useReducer: jest.fn(),
    useRef: jest.fn(),
    useMemo: jest.fn(),
    useCallback: jest.fn(),
    useWindowSize: jest.fn()
  };
});

describe('COMPANIES', () => {
  let canvas: HTMLCanvasElement;
  beforeEach(() => {
    canvas = document.createElement('canvas');
  });
  it('should checked checkbox-hdd and checkbox-ssd', () => {
    const { getByTestId } = render(<Companies storage={100} transfer={200} />);
    const hddCheckbox = getByTestId('hdd') as HTMLInputElement;
    const ssdCheckbox = getByTestId('ssd') as HTMLInputElement;

    expect(hddCheckbox.checked).toBe(true);
    fireEvent.click(hddCheckbox);
    expect(hddCheckbox.checked).toBe(true);

    expect(ssdCheckbox.checked).toBe(false);
    fireEvent.click(ssdCheckbox);
    expect(ssdCheckbox.checked).toBe(true);
    fireEvent.click(ssdCheckbox);
    expect(ssdCheckbox.checked).toBe(true);
    expect(hddCheckbox.checked).toBe(false);
  });
  it('should checked checkbox-multy and checkbox-single', () => {
    const { getByTestId } = render(<Companies storage={100} transfer={200} />);
    const hddCheckbox = getByTestId('multy') as HTMLInputElement;
    const ssdCheckbox = getByTestId('single') as HTMLInputElement;

    expect(hddCheckbox.checked).toBe(true);
    fireEvent.click(hddCheckbox);
    expect(hddCheckbox.checked).toBe(true);

    expect(ssdCheckbox.checked).toBe(false);
    fireEvent.click(ssdCheckbox);
    expect(ssdCheckbox.checked).toBe(true);
    fireEvent.click(ssdCheckbox);
    expect(ssdCheckbox.checked).toBe(true);
    expect(hddCheckbox.checked).toBe(false);
  });
});
