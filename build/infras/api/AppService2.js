"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService2 = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const express_1 = tslib_1.__importDefault(require("express"));
const path_1 = tslib_1.__importDefault(require("path"));
const ApiDocument_1 = require("./ApiDocument");
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const HttpServer_1 = require("../servers/HttpServer");
const ApiAuthenticator_1 = require("./ApiAuthenticator");
const fs = tslib_1.__importStar(require("fs"));
const https = tslib_1.__importStar(require("https"));
class ApiService2 {
    static init(port, callback) {
        const app = (0, express_1.default)();
        const logger = typedi_1.default.get("log.service");
        app.get("/", (_req, res) => {
            res.status(200).end("ok");
        });
        app.get("/.well-known/pki-validation/1F7DE192245FF311D2556D6C890BB999.txt", (_req, res) => {
            res.sendFile('/home/ec2-user/dev-dols/1F7DE192245FF311D2556D6C890BB999.txt');
        });
        const key = fs.readFileSync('./src/private.key');
        const cert = fs.readFileSync('./src/certificate.crt');
        const loggingMiddleware = logger.createMiddleware();
        app.use(loggingMiddleware);
        const options = this.getOptions({
            controllers: [path_1.default.join(__dirname + "/controllers/**/*{.js,.ts}")],
            middlewares: [path_1.default.join(__dirname, "./middlewares/*Middleware{.js,.ts}")],
            validation: false,
            development: !!(process.env.NODE_ENV != "production"),
        });
        const httpServer = new HttpServer_1.HttpServer();
        httpServer.createApp(app, options);
        const spec = ApiDocument_1.ApiDocument.generate(options);
        app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(spec));
        httpServer.start(port, callback);
        https.createServer({ key, cert })
            .listen(8000, () => {
            console.log('https');
        });
    }
    static getOptions(param) {
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
            authorizationChecker: ApiAuthenticator_1.ApiAuthenticator.authorizationChecker,
            currentUserChecker: ApiAuthenticator_1.ApiAuthenticator.currentUserChecker,
        };
    }
}
exports.ApiService2 = ApiService2;
