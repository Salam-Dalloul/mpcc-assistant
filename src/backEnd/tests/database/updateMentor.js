const test = require('tape');
const updateMentor = require('../../database/queries/updateMentor');

const updateMentorQueryTest = () => {
  test('test updateMentorQueryTest query', t => {
    const mentorData = {
      id: 1,
      first_name: 'Smart',
      last_name: 'Smarter',
      email: 'Smart@smart',
      date_of_arrival: '17/12/2015',
      current_stage: 'ALMOST',
      info: '{"mothers_name": "anything", "bio":"salam", "purpose_of_visit":"dalloul", "signed_waiver": false}'
    };
    updateMentor(mentorData, (err, res) => {
      if (err) {
        t.fail();
        t.end();
      }
      t.equal(res.rowCount, 1, 'rowCount should equal 1');
      t.deepEqual(res.rows[0].info, JSON.parse(mentorData.info), 'new data retrived from update query should be the same as sent by client');
      t.end();
    });
  });
};

module.exports = {
  updateMentorQueryTest
};
