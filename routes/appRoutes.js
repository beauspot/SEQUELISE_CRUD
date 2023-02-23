const express = require("express");
const router = express.Router();
const gigsController = require("../controller/appCtrls");

router.get("/", gigsController.getAllGigs);

router.post("/add", gigsController.CreateGigs);

router.get("/:id", gigsController.get_a_single_gig);

router.patch("/:id", gigsController.updateAGig);

router.delete("/:id", gigsController.deleteAGig);

module.exports = router;
