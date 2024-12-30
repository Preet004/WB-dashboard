const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUploaded: { type: Boolean, default: false },
  imageUrl: { type: String },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});

module.exports = mongoose.model('Member', MemberSchema);
