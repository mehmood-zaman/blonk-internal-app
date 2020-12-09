import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import moment from 'moment';
export const generateCompanies = (count, url) => {
  let companies = [];

  for (let id = 1; id <= count; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let date = moment(faker.date.past()).format('DD MMM YYYY');
    let uuid = faker.random.uuid();

    companies.push({
      key: id,
      id: uuid,
      logo: faker.image.business(),
      name: faker.company.companyName(),
      link: <Link to={`${url}/${uuid}`}>{faker.company.companyName()}</Link>,
      owner: `${firstName} ${lastName}`,
      title: faker.name.jobTitle(),
      email: faker.internet.email(),
      jobCount: faker.random.number({
        min: 1,
        max: 8,
      }),
      recruiterCount: faker.random.number({
        min: 1,
        max: 4,
      }),
      createdAt: date,
    });
  }

  return { data: companies };
};
