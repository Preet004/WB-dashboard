const Team = require('../models/Team');
const Organization = require('../models/Organization');

exports.createTeam = async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();

    await Organization.findByIdAndUpdate(req.body.organization, {
      $push: { teams: team._id },
    });

    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
