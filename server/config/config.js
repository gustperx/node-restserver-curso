// ====================================
// Port
// ====================================
process.env.PORT = process.env.PORT || 3000;

// ====================================
// Entorno
// ====================================
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// ====================================
// Vencimiento del token
// ====================================
// 60 Segundos
// 60 Minutos
// 24 Horas
// 30 Dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ====================================
// SEED de autentiacion
// ====================================
process.env.SEED = process.env.SEED || "esta-es-mi-seed-super-secreta";

// ====================================
// Base de datos
// ====================================
let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cafe";
} else {
  urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ====================================
// Google client ID
// ====================================
process.env.CLIENT_ID =
  process.env.CLIENT_ID ||
  "855000631529-vl904af0cgrdh6t2j1b2s2u0tv9nth6g.apps.googleusercontent.com";
