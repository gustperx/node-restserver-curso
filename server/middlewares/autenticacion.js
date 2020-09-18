const jwt = require("jsonwebtoken");

// ====================================
// Verificar token
// ====================================
let verificaToken = (req, res, next) => {
  let token = req.get("token");

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "token no valido",
        },
      });
    }

    req.usuario = decoded.usuario;
    next();
  });
};

// ====================================
// Verificar Rol Admin
// ====================================
let verificaAdminRole = (req, res, next) => {
  let usuario = req.usuario;

  console.log(usuario.role);

  if (!(usuario.role === "ADMIN_ROLE")) {
    return res.status(401).json({
      ok: false,
      err: {
        message: "Usuario no administrador",
      },
    });
  }

  next();
};

module.exports = {
  verificaToken,
  verificaAdminRole,
};
