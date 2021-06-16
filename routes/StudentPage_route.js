var express = require('express');
var router = express.Router();
const database = require('../models/index')
const studentModel = database.db.Student;

/* GET create page. */
router.get('/create',  function(req, res, next) {
  res.render('student/createStudent');
});
router.get('/', async function(req, res, next) {
  //find all student
  const students = await studentModel.findAll();
  console.log (students);
  res.render('student/Index', {students: students});
});

router.post('/addStudent', async function(req, res, next) {
  // res.send(req.body);
  const {studentName} = req.body;

  // Create a new student
  await studentModel.create({ name : studentName});
  res.redirect('/student');
});
/* GET delete page. */
router.get('/delete/:id', async function(req, res, next) {
  // Delete everyone named "Jane"
  const deleteId = req.params.id;
  await studentModel.destroy({
  where: {
    id: deleteId
  },
});
res.redirect('/student');
});
module.exports = router;