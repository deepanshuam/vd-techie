import ContactUs from '../models/contact.Model.js'; // Import the ContactUs model
import { ApiError } from '../utiles/api.Error.js'; // Import the custom error class
import { ApiResponse } from '../utiles/api.Response.js'; // Import the API response utility
import { asyncHandler } from '../utiles/asyncHandler.js'; // Import the async handler utility

// Controller to handle creating a Contact Us message
const createContactMessage = asyncHandler(async (req, res, next) => {
  const { name, phoneNumber, course, email, message } = req.body;

  // Validate the required fields
  if (!name || !phoneNumber || !course || !email || !message) {
    return next(new ApiError(400, 'All fields are required.'));
  }

  // Create a new contact message
  const newContactMessage = await ContactUs.create({
    name,
    phoneNumber,
    course,
    email,
    message
  });

  // Send success response
  return res.status(201).json(new ApiResponse(201, newContactMessage, 'Message sent successfully.'));
});

// Controller to handle fetching all contact messages
const getAllContactMessages = asyncHandler(async (req, res, next) => {
  const contactMessages = await ContactUs.find();

  // If no contact messages found
  if (contactMessages.length === 0) {
    return next(new ApiError(404, 'No contact messages found.'));
  }

  // Send success response
  return res.status(200).json(new ApiResponse(200, contactMessages, 'Fetched contact messages successfully.'));
});

// Controller to handle fetching a contact message by ID
const getContactMessageById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const contactMessage = await ContactUs.findById(id);

  // If contact message not found
  if (!contactMessage) {
    return next(new ApiError(404, 'Contact message not found.'));
  }

  // Send success response
  return res.status(200).json(new ApiResponse(200, contactMessage, 'Fetched contact message successfully.'));
});

// Controller to handle updating a contact message
const updateContactMessage = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, phoneNumber, course, email, message } = req.body;

  const contactMessage = await ContactUs.findByIdAndUpdate(
    id,
    { name, phoneNumber, course, email, message },
    { new: true, runValidators: true }
  );

  // If contact message not found
  if (!contactMessage) {
    return next(new ApiError(404, 'Contact message not found.'));
  }

  // Send success response
  return res.status(200).json(new ApiResponse(200, contactMessage, 'Contact message updated successfully.'));
});

// Controller to handle deleting a contact message
const deleteContactMessage = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const contactMessage = await ContactUs.findByIdAndDelete(id);

  // If contact message not found
  if (!contactMessage) {
    return next(new ApiError(404, 'Contact message not found.'));
  }

  // Send success response
  return res.status(200).json(new ApiResponse(200, null, 'Contact message deleted successfully.'));
});

export {
  createContactMessage,
  getAllContactMessages,
  getContactMessageById,
  updateContactMessage,
  deleteContactMessage
};
