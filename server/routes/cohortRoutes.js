const express = require('express');
const router = express.Router();
const cohortController = require('../controllers/cohortController');


router.get('/getAll', cohortController.getAllCohorts);
router.get('/getOne/:id', cohortController.getCohortById);
router.post('/add', cohortController.createCohort);
router.put('/updateOne/:id', cohortController.updateCohort);
router.delete('/delete/:id', cohortController.deleteCohort);

module.exports = router;
