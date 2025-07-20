import express from "express";
import http from "http";

import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";


import routes from "./src/routes/index.js";
import { initWebSocket } from "./src/websocket/index.js";


import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";

import { swaggerSpec } from "./swagger.js";

const app = express();
const server = http.createServer(app);

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:8080/", // sin la barra al final
    credentials: true,
  })
);

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Límite de tasa
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      status: 429,
      message: "Too many requests from this IP, please try again later.",
    },
  })
);

// Rutas y WebSocket
app.use("/api", routes);
initWebSocket(server);

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Puerto con valor 3001
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log("Server running at PORT:", PORT);
});

