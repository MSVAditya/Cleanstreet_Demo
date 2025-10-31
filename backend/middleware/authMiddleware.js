import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


//  MIDDLEWARE

export const protect = async (req, res, next) => {
  let token;

  //  Check if the Authorization header has a Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user from decoded token and exclude password
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(404).json({ message: "User not found" });
      }

      next(); // Continue to next middleware/controller
    } catch (error) {
      console.error("Auth Error:", error.message);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  }

  //  If token not found
  if (!token) {
    return res.status(401).json({ message: "No token provided, unauthorized" });
  }
};
