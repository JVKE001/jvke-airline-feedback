import JWT from "jsonwebtoken";

// Middleware to check if user is signed in
export const authMiddleware = (req, res, next) => {
  // Get the authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Expect "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify token and decode payload
    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // attach user info (id, role, etc.)
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token expired, please login again" });
    }
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Role-based middleware for admin
export const verifyRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbitten: Insufficient role" });
    }
    next();
  };
};
