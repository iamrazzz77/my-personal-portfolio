import jwt from 'jsonwebtoken';

export const protectAdmin = (req, res, next) => {
  try {
    let token = req.cookies?.token;

    // Also check Bearer Authorization header if provided
    if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized as admin. Token missing.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fsk_portfolio_jwt_secret_key_2026_riyadh');
    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Not authorized as admin. Token invalid or expired.' });
  }
};
