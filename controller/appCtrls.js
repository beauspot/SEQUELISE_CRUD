const Model = require("../models");
const wrappers = require("../middleware/asyncMiddlewares");
const { createCustomError } = require("../errors/custom_errors");

exports.getAllGigs = wrappers.asyncWrapper(async (req, res) => {
  const getallgigs = await Model.GigsModel.findAll();
  if (!getallgigs) {
    return res.status(404).json({ msg: "Cannot Get all Gigs." });
  } else {
    return res
      .status(200)
      .json({ length: getallgigs.length, gigs_data: getallgigs });
  }
});

exports.CreateGigs = wrappers.asyncWrapper(async (req, res) => {
  const { title, technologies, budget, description, contact_email } = req.body;
  const creategig = await Model.GigsModel.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  });
  if (!creategig) {
    return res.status(404).json({ msg: "Cannot Post Gig" });
  } else {
    return res.status(200).json({ status: "successful", gigs: creategig });
  }
});

exports.get_a_single_gig = wrappers.asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const getById = await Model.GigsModel.findByPk(id);
  if (!getById) {
    return next(createCustomError(`No Task With ID: ${id}`));
  } else {
    return res.status(200).json({ status: "successful", gig: getById });
  }
});

exports.updateAGig = wrappers.asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { title, technologies, budget, description, contact_email } = req.body;
  const updateGig = await Model.GigsModel.findByPk(id);
  if (updateGig) {
    updateGig.title = title;
    updateGig.description = description;
    updateGig.contact_email = contact_email;
    updateGig.technologies = technologies;
    updateGig.budget = budget;
    const savedData = await updateGig.save();
    return res
      .status(200)
      .json({ status: "Successful", updatedData: savedData });
  } else {
    return next(createCustomError(`No Task With ID: ${id}`));
  }
});

exports.deleteAGig = wrappers.asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const deleteGig = await Model.GigsModel.findByPk(id);
  if (deleteGig) {
    const gigDeleted = await deleteGig.destroy();
    return res
      .status(200)
      .json({ status: "Successful", msg: `Gig: ${id} deleted` });
  } else {
    return next(createCustomError(`No Task With ID: ${id}`));
  }
});
