const express = require("express");
const tourController = require("../controllers/tourController");
const fs = require("fs");

const router = express.Router(); //middleware function

// router.param("id", tourController.checkID);

router.route("/top-5-cheap").get(tourController.aliasTopTours, tourController.getAllTours);

router.route("/tour-stats").get(tourController.getTourStats);

router.route("/").get(tourController.getAllTours).post(tourController.createTour); // aynı endpointe sahipler gruplanır, sıra önemsiz.
router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
