const { selectMentorsTest } = require('./database/selectMentors');
const { selectSingleMentorTest } = require('./database/selectSingleMentor');
const { insertSingleMentorTest } = require('./database/insertSingleMentor');
const { updateMentorQueryTest } = require('./database/updateMentor');
const { getMentorsTest } = require('./controllers/getMentors');
const { getSingleMentorTest } = require('./controllers/getSingleMentor');
const { getEmailTest } = require('./controllers/getEmail');
const { selectUserTest } = require('./database/selectUserTest');
const { postLogin } = require('./controllers/postLogin');
const { updateMentorTest } = require('./controllers/updateMentor');
const { postDocStatusTest } = require('./controllers/postDocStatus');
const { postFlightInfo } = require('./controllers/postFlightInfo');
const { selectMentorByEmailTest } = require('./database/selectMentorByEmail');

selectMentorsTest();
getMentorsTest();
selectSingleMentorTest();
getSingleMentorTest();
insertSingleMentorTest();
selectUserTest();
postLogin();
updateMentorTest();
postDocStatusTest();
postFlightInfo();
selectMentorByEmailTest();
updateMentorQueryTest();
getEmailTest();
