const authService = require("./auth.service");

async function register(req, res) {
  try {
    const user = await authService.register(req.body);

    // Hapus password dari response untuk keamanan
    const userResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return res.status(201).json({
      success: true,
      data: userResponse,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  register,
};