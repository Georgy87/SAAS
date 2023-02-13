import { ICompanies } from '@constants/types';

export const createChartsData = (
  backblazePrice: number,
  bunnyPrice: number,
  scalewayPrice: number,
  vultrPrice: number
): ICompanies[] => {
  const companies: ICompanies[] = [
    {
      price: backblazePrice,
      color: '#4a9892',
    },
    {
      price: bunnyPrice,
      color: '#4a9892',
    },
    {
      price: scalewayPrice,
      color: '#4a9892',
    },
    {
      price: vultrPrice,
      color: '#4a9892',
    },
  ];

  const minPrice = Math.min(backblazePrice, bunnyPrice, scalewayPrice, vultrPrice);
  return companies.map((company: ICompanies) => {
    company.price === minPrice ? (company.color = 'rgba(255,0,0,0.4)') : (company.color = '#4a9892');
    return company;
  });
};
