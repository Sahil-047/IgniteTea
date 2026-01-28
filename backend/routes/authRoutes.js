import express from 'express';
import { body } from 'express-validator';
import {
  registerUser,
  loginUser,
  registerEmployee,
  loginEmployee,
  getCurrentUser,
  getCurrentEmployee
} from '../controllers/authController.js';
import { verifyToken, verifyEmployee } from '../middlewares/auth.js';

const router = express.Router();

// Validation rules
const userRegisterValidation = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('first_name')
    .optional()
    .trim()
    .isLength({ min: 1 })
    .withMessage('First name cannot be empty'),
  body('last_name')
    .optional()
    .trim()
    .isLength({ min: 1 })
    .withMessage('Last name cannot be empty'),
  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number')
];

const userLoginValidation = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

const employeeRegisterValidation = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('first_name')
    .trim()
    .notEmpty()
    .withMessage('First name is required'),
  body('last_name')
    .trim()
    .notEmpty()
    .withMessage('Last name is required'),
  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  body('role')
    .optional()
    .isIn(['admin', 'staff', 'manager'])
    .withMessage('Role must be admin, staff, or manager')
];

const employeeLoginValidation = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

// User routes
router.post('/user/register', userRegisterValidation, registerUser);
router.post('/user/login', userLoginValidation, loginUser);
router.get('/user/me', verifyToken, getCurrentUser);

// Employee routes
router.post('/employee/register', employeeRegisterValidation, registerEmployee);
router.post('/employee/login', employeeLoginValidation, loginEmployee);
router.get('/employee/me', verifyEmployee, getCurrentEmployee);

export default router;
