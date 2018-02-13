const express = require('express');

const router = express.Router();
const getEmail = require('./getEmail');
const postEmail = require('./postEmail');
const postLogin = require('./postLogin');
const getMentors = require('./getMentors');
const postDocStatus = require('./postDocStatus');
const postWaiver = require('./postWaiver');
const postHostMentor = require('./postHostMentor');
const getSingleMentor = require('./getSingleMentor');
const postUpdateMentorField = require('./postUpdateMentorField');

router.get('/get-mentors', getMentors);
router.get('/dashboard/mentor-panel/:mentorSelector', getSingleMentor);
router.get('/dashboard/mentor-panel/:mentorSelector/check/:docType', postDocStatus);
router.get('/dashboard/mentor-panel/:mentorSelector/send-email/:emailType', getEmail);
router.post('/submit/signed-waiver/confirm', postWaiver);
router.post('/dashboard/mentor-panel/:mentorSelector/sendEmail/:emailType/confirm', postEmail);
router.post('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', postUpdateMentorField);
router.post('/dashboard/host-mentor', postHostMentor);
router.post('/login', postLogin);

module.exports = router;
