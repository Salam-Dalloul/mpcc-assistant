const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const getSingleMentorTest = () => {
  test('test get /dashboard/mentor-panel/:mentorSelector', t => {
    supertest(app)
      .get('/dashboard/mentor-panel/salam-dalloul-93')
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.end();
      });
  });
};
module.exports = {
  getSingleMentorTest
};