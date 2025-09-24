import { faker } from '@faker-js/faker';

export function setupdataContact() {
      const firstname = faker.person.firstName();
      const lastname = faker.person.firstName();
      const phone = faker.finance.accountNumber(11);
      const email = faker.internet.email(); 
      return {
        firstname,
        lastname,
        phone,
        email
        };
    }
export function setupdataContact_shortfirstname() {
      const firstname = faker.string.alphanumeric(2);
      const lastname = faker.person.firstName();
      const phone = faker.finance.accountNumber(11);
      const email = faker.internet.email();
      return {
        firstname,
        lastname,
        phone,
        email
        };
    }
export function setupdataContact_longfirstname() {
      const firstname = faker.string.alphanumeric(20);
      const lastname = faker.person.firstName();
      const phone = faker.finance.accountNumber(11);
      const email = faker.internet.email();
      return {
        firstname,
        lastname,
        phone,
        email
        };
    }
export function setupdataContact_shortlastname() {
      const firstname = faker.person.firstName();
      const lastname = faker.string.alphanumeric(2);
      const phone = faker.finance.accountNumber(11);
      const email = faker.internet.email();
      return {
        firstname,
        lastname,
        phone,
        email
        };
    }
export function setupdataContact_longlastname() {
      const firstname = faker.person.firstName();
      const lastname = faker.string.alphanumeric(32);
      const phone = faker.finance.accountNumber(11);
      const email = faker.internet.email();
      return {
        firstname,
        lastname,
        phone,
        email
        };
    }


 
