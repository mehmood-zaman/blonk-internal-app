import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import moment from 'moment';

export const generateUsers = (count, url) => {
  let users = [];

  const random = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  const role = ['Recruiter', 'Lead recruiter'];
  const status = ['complete', 'incomplete'];
  const location = ['Singapore', 'Pakistan', 'Malaysia', 'Pakistan'];
  for (let id = 1; id <= count; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let date = moment(faker.date.past()).format('DD MMM YYYY');
    let uuid = faker.random.uuid();

    users.push({
      key: id,
      id: uuid,
      photo: faker.image.avatar(),
      fname: faker.name.firstName(),
      lname: faker.name.lastName(),
      link: <Link to={`${url}/${uuid}`}>{`${firstName} ${lastName}`}</Link>,
      title: faker.name.title(),
      jobTitle: faker.name.jobTitle(),
      email: faker.internet.email(),
      location: random(location),
      summary: faker.lorem.paragraph(),
      role: random(role),
      jobCount: faker.random.number({
        min: 1,
        max: 8,
      }),
      companyCount: faker.random.number({
        min: 1,
        max: 4,
      }),
      status: random(status),
      resume:
        'https://res.cloudinary.com/blonk-group/image/upload/v1598281984/temp/sample.pdf',
      createdAt: date,
    });
  }

  return { users };
};
