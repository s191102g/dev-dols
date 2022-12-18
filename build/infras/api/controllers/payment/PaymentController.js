"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const userEnum_1 = require("../../../../core/domain/enums/userEnum");
const UserAuthenticated_1 = require("../../../../core/shared/UserAuthenticated");
const CreatePaymentHandler_1 = require("../../../../core/usecases/payment/create-payment/CreatePaymentHandler");
const CreatePaymentOutput_1 = require("../../../../core/usecases/payment/create-payment/CreatePaymentOutput");
let PaymentController = class PaymentController {
    constructor(_createPaymentHandler) {
        this._createPaymentHandler = _createPaymentHandler;
    }
    async create(userAuth) {
        return await this._createPaymentHandler.handle(userAuth.userId);
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: " Create transaction with paypal" }),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.ResponseSchema)(CreatePaymentOutput_1.CreatePaymentOutput),
    tslib_1.__param(0, (0, routing_controllers_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserAuthenticated_1.UserAuthenticated]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentController.prototype, "create", null);
PaymentController = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)("/v1/payment"),
    tslib_1.__metadata("design:paramtypes", [CreatePaymentHandler_1.CreatePaymentHandler])
], PaymentController);
exports.PaymentController = PaymentController;
