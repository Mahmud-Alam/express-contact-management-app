const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findById(id);

    if (!contact) {
      res.status(404).json({ message: "No contact is found with this ID!" });
      return;
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID format!" });
  }
});

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone, type } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);

    if (!contact) {
      res.status(404).json({ message: "No contact found with this ID!" });
      return;
    }

    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updatedContact);
  } catch (error) {
    // Catch any error including invalid ObjectId format
    if (error.name === "CastError") {
      res.status(400).json({ message: "Invalid contact ID format!" });
    } else {
      res.status(500).json({ message: "Server Error!" });
    }
  }
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    // if (!contact) {
    //   res.status(404);
    //   throw new Error("Contact is not found!");
    // }
    if (!contact) {
      res.status(404).json({ message: "No contact found with this ID!" });
      return;
    }

    await Contact.deleteOne();
    res.status(200).json({ message: "Contact deleted successfully!" });
  } catch (error) {
    // Catch any error including invalid ObjectId format
    if (error.name === "CastError") {
      res.status(400).json({ message: "Invalid contact ID format!" });
    } else {
      res.status(500).json({ message: "Server Error!" });
    }
  }
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
