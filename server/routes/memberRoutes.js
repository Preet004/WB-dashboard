const express = require('express');
const multer = require('multer');
const router = express.Router();
const { createMember, uploadImage } = require('../controllers/memberController');

const upload = multer({ dest: 'uploads/' });

router.post('/', createMember);
router.post('/:id/image', upload.single('image'), uploadImage);

module.exports = router;
