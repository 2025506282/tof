// src/app.ts
import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from "express";
import bodyParser from "body-parser";
import { ValidateError } from "tsoa";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";
import path from 'path';
import cors from "cors";

export const app = express();
app.use(cors());
// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
console.log('__dirname-------', __dirname);
app.use('/static',express.static(path.join(__dirname,'public')));
RegisterRoutes(app);
app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
});
app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import("./swagger.json")));
});
app.get("/.status", function (_, res, __) {
  res.json({
    ok: true,
  });
});
