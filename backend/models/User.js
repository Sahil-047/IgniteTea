import pool from '../config/database.js';

class User {
  // Create users table
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        phone VARCHAR(20),
        address TEXT,
        city VARCHAR(100),
        state VARCHAR(100),
        postal_code VARCHAR(20),
        country VARCHAR(100) DEFAULT 'India',
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(query);
    console.log('✅ Users table created/verified');
  }

  // Find user by email
  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  // Find user by ID
  static async findById(id) {
    const query = 'SELECT id, email, first_name, last_name, phone, address, city, state, postal_code, country, is_active, created_at FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  // Create new user
  static async create(userData) {
    const {
      email,
      password,
      first_name,
      last_name,
      phone,
      address,
      city,
      state,
      postal_code,
      country
    } = userData;

    const query = `
      INSERT INTO users (email, password, first_name, last_name, phone, address, city, state, postal_code, country)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id, email, first_name, last_name, phone, address, city, state, postal_code, country, is_active, created_at
    `;
    
    const values = [
      email,
      password,
      first_name || null,
      last_name || null,
      phone || null,
      address || null,
      city || null,
      state || null,
      postal_code || null,
      country || 'India'
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Update user
  static async update(id, userData) {
    const fields = [];
    const values = [];
    let paramCount = 1;

    Object.keys(userData).forEach((key) => {
      if (userData[key] !== undefined && key !== 'password') {
        fields.push(`${key} = $${paramCount}`);
        values.push(userData[key]);
        paramCount++;
      }
    });

    if (fields.length === 0) {
      return await this.findById(id);
    }

    fields.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(id);

    const query = `
      UPDATE users 
      SET ${fields.join(', ')}
      WHERE id = $${paramCount}
      RETURNING id, email, first_name, last_name, phone, address, city, state, postal_code, country, is_active, updated_at
    `;

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Delete user (soft delete)
  static async delete(id) {
    const query = `
      UPDATE users 
      SET is_active = false, updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING id
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}

export default User;
