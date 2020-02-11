const express = require('express');
const courseRoutes = express.Router();

// Require course model in our routes module
let Course = require('./course.model');

// route to create a new course
courseRoutes.route('/create').post((req, res) => {
    let course = new Course(req.body)
    course.save()
    .then(() => {
      res.status(200).json({'Course': 'Course created successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to create course");
    });
})

// route to rank a course
courseRoutes.route('/rank/:courseid').post((req, res) => {
  let postData = new Course(req.body)
  Course.findById(req.params.courseid, function(err, course){
    if(!course)
      res.status(404).send("data is not found");
    else {
      course.rank = postData.rank
      course.save()
      .then(() => {
        res.json('rank saved')
      })
      .catch(() => {
        res.status(400).send("unable to save rank");
      })
    }

  })
})

// route to update the rank of a course
courseRoutes.route('/rank/update/:courseid').post((req, res) => {
  let postData = new Course(req.body)
  Course.findById(req.params.courseid, function(err, course){
    if(!course)
      res.status(404).send("data is not found");
    else {
      course.rank = postData.rank
      course.save()
      .then(() => {
        res.json('rank saved')
      })
      .catch(() => {
        res.status(400).send("unable to save rank");
      })
    }

  })
})

// route to retrieve course by provider
courseRoutes.route('/provider/:providername').get(function (req, res) {
  let providerName = req.params.providername
  Course.find({provider: providerName}, function(err, obj){
  if(err){
    res.json(err);
  }
  else {
    res.json(obj);
  }
});
});

// route to get all courses
courseRoutes.route('/').get(function (req, res) {
    Course.find(function(err, courses){
    if(err){
      res.json(err);
    }
    else {
      res.json(courses);
    }
  });
});

// Defined edit route
courseRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Course.findById(id, function (err, course){
        if(err) {
          res.json(err);
        }
        res.json(course);
    });
  });

//  Defined update route
courseRoutes.route('/update/:id').post(function (req, res) {
    Course.findById(req.params.id, function(err, course) {
    if (!course)
      res.status(404).send("data is not found");
    else {
        course.topic = req.body.topic
        course.price = req.body.price
        course.location = req.body.location
        course.provider = req.body.provider
        course.time = req.body.time
        course.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the course");
      });
    }
  });
});

// Defined delete | remove | destroy route
courseRoutes.route('/delete/:id').delete(function (req, res) {
    Course.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = courseRoutes;