// Define your authentication middleware function
const authMiddleware = (req, res, next) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // If authenticated, proceed to the next middleware or route handler
    return next();
  } else {
    // If not authenticated, redirect the user to the login page or send an error response
    res.status(401).send("Unauthorized");
  }
};

// Export the middleware function
module.exports = authMiddleware;
