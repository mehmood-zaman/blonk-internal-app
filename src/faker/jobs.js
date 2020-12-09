import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import moment from 'moment';
export const generateJobs = (count, url) => {
  let jobs = [];
  const random = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  const location = [
    ['Singapore', 'Pakistan'],
    ['Malaysia'],
    ['Singapore'],
    ['Pakistan'],
    ['France', 'Singapore'],
  ];
  const status = ['active', 'archived', 'pending', 'rejected'];
  const experience = ['1-2 yrs', '2-3 yrs', '3-4 yrs'];
  const jobFields = [
    ['IT', 'Software Development'],
    ['Finance'],
    ['Marketing', 'Social Marketing', 'Advert'],
  ];
  const skills = [
    ['UI/UX', 'Frontend Development'],
    ['Marketing'],
    ['Node JS', 'Cloud computing'],
  ];

  for (let id = 1; id <= count; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let date = moment(faker.date.past()).format('DD MMM YYYY');
    let uuid = faker.random.uuid();

    jobs.push({
      key: id,
      id: uuid,
      logo: faker.image.business(),
      company: faker.company.companyName(),
      link: <Link to={`${url}/${uuid}`}>{faker.lorem.sentence()}</Link>,
      description: faker.lorem.paragraphs(),
      location: random(location),
      experience: random(experience),
      skills: random(skills),
      leadRecruiter: `${firstName} ${lastName}`,
      jobFeilds: random(jobFields),
      contractType: faker.name.jobType(),
      salaryPackage: '$10k-15k',
      targetCompanies: faker.company.companyName(),
      recruiter: [`${firstName} ${lastName}`, `${firstName} ${lastName}`],
      status: random(status),
      Candidates: faker.random.number({
        min: 10,
        max: 50,
      }),
      createdAt: date,
    });
  }

  return { jobs };
};
