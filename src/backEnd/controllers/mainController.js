const express = require('express');

const router = express.Router();
const getMentors = require('./getMentors');
const hostMentor = require('./hostMentor');

const getEmail = require('./getEmail');
const getSingleMentor = require('./getSingleMentor');
router.get('/', (req, res) => res.send({ app: 'A' }));
router.get('/get-mentors', getMentors);
// Expect { name, lname, email, dateofarrival, existing? } =>
router.post('/dashboard/host-mentor', hostMentor);

router.get('/dashboard/mentor-panel/:mentorSelector', getSingleMentor);
router.get('/dashboard/mentor-panel/:mentorSelector/send-email/:emailType', getEmail);

module.exports = router;
