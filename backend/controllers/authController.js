import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import User from '../models/User.js';
import Employee from '../models/Employee.js';

// Generate JWT Token
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

// User Registration
export const registerUser = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password, first_name, last_name, phone, address, city, state, postal_code, country } = req.body;

    // Check if user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const userData = {
      email,
      password: hashedPassword,
      first_name,
      last_name,
      phone,
      address,
      city,
      state,
      postal_code,
      country: country || 'India'
    };

    const user = await User.create(userData);

    // Generate token
    const token = generateToken({
      id: user.id,
      email: user.email,
      type: 'user'
    });

    // Remove password from response
    delete user.password;

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user,
        token
      }
    });
  } catch (error) {
    console.error('Register user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: error.message
    });
  }
};

// User Login
export const loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password } = req.body;

    // Find user
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check if user is active
    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        message: 'Account is deactivated. Please contact support.'
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate token
    const token = generateToken({
      id: user.id,
      email: user.email,
      type: 'user'
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: userWithoutPassword,
        token
      }
    });
  } catch (error) {
    console.error('Login user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: error.message
    });
  }
};

// Employee Registration
export const registerEmployee = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password, first_name, last_name, phone, role, department } = req.body;

    // Check if employee already exists
    const existingEmployee = await Employee.findByEmail(email);
    if (existingEmployee) {
      return res.status(400).json({
        success: false,
        message: 'Employee with this email already exists'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create employee
    const employeeData = {
      email,
      password: hashedPassword,
      first_name,
      last_name,
      phone,
      role: role || 'staff',
      department
    };

    const employee = await Employee.create(employeeData);

    // Generate token
    const token = generateToken({
      id: employee.id,
      email: employee.email,
      type: 'employee',
      role: employee.role
    });

    // Remove password from response
    delete employee.password;

    res.status(201).json({
      success: true,
      message: 'Employee registered successfully',
      data: {
        employee,
        token
      }
    });
  } catch (error) {
    console.error('Register employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during employee registration',
      error: error.message
    });
  }
};

// Employee Login
export const loginEmployee = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password } = req.body;

    // Find employee
    const employee = await Employee.findByEmail(email);
    if (!employee) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check if employee is active
    if (!employee.is_active) {
      return res.status(403).json({
        success: false,
        message: 'Account is deactivated. Please contact administrator.'
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, employee.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate token
    const token = generateToken({
      id: employee.id,
      email: employee.email,
      type: 'employee',
      role: employee.role
    });

    // Remove password from response
    const { password: _, ...employeeWithoutPassword } = employee;

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        employee: employeeWithoutPassword,
        token
      }
    });
  } catch (error) {
    console.error('Login employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: error.message
    });
  }
};

// Get current user (protected route)
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { user }
    });
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get current employee (protected route)
export const getCurrentEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.employee.id);
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { employee }
    });
  } catch (error) {
    console.error('Get current employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};
