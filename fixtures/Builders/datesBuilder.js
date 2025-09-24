import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

export function  generateDates() {
  const checkindate = dayjs().add(1, 'day').format('DD/MM/YYYY');
  const checkoutdate = dayjs().add(3, 'day').format('DD/MM/YYYY');  

  return {
    checkindate,
    checkoutdate
  };
}

