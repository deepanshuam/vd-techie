import express from 'express';
import { 
  createContactMessage, 
  getAllContactMessages, 
  getContactMessageById, 
  updateContactMessage, 
  deleteContactMessage 
} from '../controller/contact.Controller.js'; // Import the controller functions

const router = express.Router();

// Route to create a new contact message
router.post('/create', createContactMessage);

// Route to get all contact messages
router.get('/contact', getAllContactMessages);

// Route to get a single contact message by ID
router.get('/contact/:id', getContactMessageById);

// Route to update a contact message by ID
router.put('/contact/:id', updateContactMessage);

// Route to delete a contact message by ID
router.delete('/contact/:id', deleteContactMessage);

export default router;
