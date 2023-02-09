const lgaService = require('./lga.service');
const catchAsync = require('express-async-handler');

const createLGA = catchAsync(async (req, res) => {
  const data = await lgaService.createLGA(req.body);
  res.status(200).json({ status: true, message: 'LGA now created...', data });
});

const getLGAs = catchAsync(async (req, res) => {
  const lgas = await lgaService.getLGAs();
  res
    .status(201)
    .json({ status: true, message: "All LGA's retrieved... ", states });
});

module.exports = { createLGA, getLGAs };
