"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const paypal = tslib_1.__importStar(require("paypal-rest-sdk"));
const Configuration_1 = require("../../../configs/Configuration");
const SystemError_1 = require("../../../core/shared/exceptions/SystemError");
const MessageError_1 = require("../../../core/shared/exceptions/message/MessageError");
let PaypalService = class PaypalService {
    constructor() {
        this._paypal = paypal;
        this._paypal.configure({
            client_id: Configuration_1.CLIENT_ID,
            client_secret: Configuration_1.CLIENT_SECRET,
            mode: Configuration_1.MODE
        });
    }
    async pay() {
        let text = '';
        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/success",
                "cancel_url": "http://localhost:3000/cancel"
            },
            "transactions": [{
                    "item_list": {
                        "items": [{
                                "name": "Iphone 4S",
                                "sku": "001",
                                "price": "25.00",
                                "currency": "USD",
                                "quantity": 1
                            }]
                    },
                    "amount": {
                        "currency": "USD",
                        "total": "25.00"
                    },
                    "description": "Iphone 4S cũ giá siêu rẻ"
                }]
        };
        return this._paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            }
            if (!payment) {
                throw new SystemError_1.SystemError(MessageError_1.MessageError.SOMETHING_WRONG);
            }
            const arr = payment.links;
            text = arr[1].href ?? "non";
            return text;
        });
    }
};
PaypalService = tslib_1.__decorate([
    (0, typedi_1.Service)("paypal.service"),
    tslib_1.__metadata("design:paramtypes", [])
], PaypalService);
exports.PaypalService = PaypalService;
