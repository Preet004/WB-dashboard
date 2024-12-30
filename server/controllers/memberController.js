const Member = require('../models/Member');
const Team = require('../models/Team');

exports.createMember = async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();

    await Team.findByIdAndUpdate(req.body.team, {
      $push: { members: member._id },
    });

    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.uploadImage = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    member.imageUploaded = true;
    member.imageUrl = `/uploads/${req.file.filename}`;
    await member.save();
    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
