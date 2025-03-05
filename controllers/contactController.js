// @desc Get all contact
// @route GET /api/contacts
// @access public

const getContact = (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
};

module.exports = {getContact};