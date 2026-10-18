import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const envAdminEmail = process.env.ADMIN_EMAIL || 'admin@faishalsaif.dev';
    const envAdminPass = process.env.ADMIN_PASSWORD || 'FaishalAdmin2026!';

    // Compare email
    if (email.toLowerCase() !== envAdminEmail.toLowerCase()) {
      return res.status(401).json({ success: false, message: 'Invalid admin email or password.' });
    }

    // Compare password
    const isMatch = (password === envAdminPass) || (await bcrypt.compare(password, await bcrypt.hash(envAdminPass, 10)));
    
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid admin email or password.' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: envAdminEmail, role: 'admin' },
      process.env.JWT_SECRET || 'fsk_portfolio_jwt_secret_key_2026_riyadh',
      { expiresIn: '7d' }
    );

    // Store in httpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return res.status(200).json({
      success: true,
      message: 'Admin authenticated successfully',
      user: { email: envAdminEmail, role: 'admin' }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Authentication server error' });
  }
};

export const logoutAdmin = (req, res) => {
  res.clearCookie('token');
  return res.status(200).json({ success: true, message: 'Logged out successfully' });
};

export const getAdminMe = (req, res) => {
  return res.status(200).json({
    success: true,
    user: { email: req.admin?.email || process.env.ADMIN_EMAIL || 'admin@faishalsaif.dev', role: 'admin' }
  });
};
