const express = require('express');
const adminMiddleware = require('../middleware/adminMiddleware');
const { getAllstaff, deleteonestaff, getAlluser, getAlladmin } = require('../controllers/adminAuthent');

const adminRoutor = express.Router();

adminRoutor.get('/get-all-staff',adminMiddleware,getAllstaff)
adminRoutor.get('/get-all-user',adminMiddleware,getAlluser)
adminRoutor.get('/get-all-admin',adminMiddleware,getAlladmin)
adminRoutor.delete('/delete-member/:id',adminMiddleware,deleteonestaff)

module.exports = adminRoutor