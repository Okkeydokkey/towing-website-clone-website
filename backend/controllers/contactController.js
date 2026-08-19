const Contact = require("../models/ContactModel");

// POST /api/contact  (public — from the site's contact form)
async function createContact(req, res) {
  const { fullName, phone, address, serviceType, vehicleInfo, vehicleCondition, message } = req.body;

  if (!fullName || !phone || !address) {
    return res.status(400).json({ message: "Name, phone, and address are required." });
  }

  const contact = await Contact.create({
    fullName, phone, address, serviceType, vehicleInfo, vehicleCondition, message,
  });

  res.status(201).json(contact);
}

// GET /api/contact  (admin only)
async function getContacts(req, res) {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
}

// PATCH /api/contact/:id  (admin only — update status)
async function updateContactStatus(req, res) {
  const { status } = req.body;
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.status(404).json({ message: "Request not found." });

  if (status) contact.status = status;
  await contact.save();
  res.json(contact);
}

// DELETE /api/contact/:id  (admin only)
async function deleteContact(req, res) {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) return res.status(404).json({ message: "Request not found." });
  res.json({ message: "Deleted." });
}

module.exports = { createContact, getContacts, updateContactStatus, deleteContact };