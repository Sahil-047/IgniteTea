import pool from '../config/database.js';

class Employee {
  // Create employees table
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS employees (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        role VARCHAR(50) DEFAULT 'staff',
        department VARCHAR(100),
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(query);
    console.log('✅ Employees table created/verified');
  }

  // Find employee by email
  static async findByEmail(email) {
    const query = 'SELECT * FROM employees WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  // Find employee by ID
  static async findById(id) {
    const query = 'SELECT id, email, first_name, last_name, phone, role, department, is_active, created_at FROM employees WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  // Create new employee
  static async create(employeeData) {
    const {
      email,
      password,
      first_name,
      last_name,
      phone,
      role,
      department
    } = employeeData;

    const query = `
      INSERT INTO employees (email, password, first_name, last_name, phone, role, department)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, email, first_name, last_name, phone, role, department, is_active, created_at
    `;
    
    const values = [
      email,
      password,
      first_name,
      last_name,
      phone || null,
      role || 'staff',
      department || null
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Update employee
  static async update(id, employeeData) {
    const fields = [];
    const values = [];
    let paramCount = 1;

    Object.keys(employeeData).forEach((key) => {
      if (employeeData[key] !== undefined && key !== 'password') {
        fields.push(`${key} = $${paramCount}`);
        values.push(employeeData[key]);
        paramCount++;
      }
    });

    if (fields.length === 0) {
      return await this.findById(id);
    }

    fields.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(id);

    const query = `
      UPDATE employees 
      SET ${fields.join(', ')}
      WHERE id = $${paramCount}
      RETURNING id, email, first_name, last_name, phone, role, department, is_active, updated_at
    `;

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Delete employee (soft delete)
  static async delete(id) {
    const query = `
      UPDATE employees 
      SET is_active = false, updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING id
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}

export default Employee;
