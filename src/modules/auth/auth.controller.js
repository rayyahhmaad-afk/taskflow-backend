const authService = require("./auth.service");

async function register(req, res) {
  try {
    const user = await authService.register(req.body);

    const { password, ...safeUser } = user;

    return res.status(201).json({
      success: true,
      data: safeUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function login(req, res) {
  try {
    const result = await authService.login(req.body);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function profile(req, res) {
  return res.status(200).json({
    success: true,
    user: req.user,
  });
}


module.exports = {
  register,
  login,
  profile,
};