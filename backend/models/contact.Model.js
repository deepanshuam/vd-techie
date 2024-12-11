import { Schema, model } from 'mongoose';

// Define the schema for the Contact Us form
const contactUsSchema = new Schema({
  name: {
    type: String,
    required: true,  // Name is required
    trim: true       // Removes any leading or trailing whitespace
  },
  phoneNumber: {
    type: String,
    required: true,  // Phone number is required
    match: [/^\d{10}$/, 'Please enter a valid phone number'] // Example validation for 10 digits
  },
  course: {
    type: [String],  // An array of strings for courses
    required: true   // At least one course must be selected
  },
  email: {
    type: String,
    required: true,  // Email is required
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']  // Email format validation
  },
  message: {
    type: String,
    required: true,  // Message is required
    minlength: [10, 'Message should be at least 10 characters long']  // Optional validation for message length
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt timestamps
});

// Create a model using the schema
const ContactUs = model('ContactUs', contactUsSchema);

export default ContactUs;
