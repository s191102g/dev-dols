import "reflect-metadata";
import express from "express";
import path from "path";
import { RoutingControllersOptions } from "routing-controllers";
import { ApiDocument } from "./ApiDocument";
import swaggerUiExpress from "swagger-ui-express";
import Container from "typedi";
import { ILogService } from "../../core/gateways/services/ILogService";
import { HttpServer } from "../servers/HttpServer";
// import { Server } from "http";
import { ApiAuthenticator } from "./ApiAuthenticator";
import * as fs from 'fs';
import * as https from 'https'
export class ApiService2 {
  static init(port: number, callback?: () => void): void {
    const app = express();
    const logger = Container.get<ILogService>("log.service");
    app.get("/", (_req, res) => {
      res.status(200).end("ok");
    });
    app.get("/.well-known/pki-validation/27E7AEDA4DCCE24B80EEF67289EA7DF5.txt", (_req, res) => {
      res.sendFile('/home/ec2-user/dev-dols/27E7AEDA4DCCE24B80EEF67289EA7DF5.txt')
    });
    const key = fs.readFileSync('./src/private.key');
    const cert= fs.readFileSync('./src/certificate.crt')
    const loggingMiddleware = logger.createMiddleware();
    app.use(loggingMiddleware);
    const options = this.getOptions({
      controllers: [path.join(__dirname + "/controllers/**/*{.js,.ts}")],
      middlewares: [path.join(__dirname, "./middlewares/*Middleware{.js,.ts}")],
      validation: false,
      development: !!(process.env.NODE_ENV != "production"),
    });
    const httpServer = new HttpServer();
    httpServer.createApp(app, options);
    const aa =  httpServer.createApp(app, options);
    const spec = ApiDocument.generate(options);
    app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(spec));
     httpServer.start(port, callback);
     https.createServer({ key, cert }, aa)
     .listen(8000,()=>{
      console.log('https');
      
     })
  }

  static getOptions(param: {
    controllers?: string[] | Function[];
    middlewares?: string[] | Function[];
    validation: boolean;
    development: boolean;
  }): RoutingControllersOptions {
    return {
      cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: [
          "Origin",
          "Content-Type",
          "Accept",
          "Authorization",
          "X-Trace",
        ],
        preflightContinue: true,
        optionsSuccessStatus: 204,
      },
      routePrefix: "/api",
      controllers: param.controllers,
      middlewares: param.middlewares,
      validation: param.validation,
      development: param.development,
      authorizationChecker: ApiAuthenticator.authorizationChecker,
      currentUserChecker: ApiAuthenticator.currentUserChecker,
    };
  }
}







