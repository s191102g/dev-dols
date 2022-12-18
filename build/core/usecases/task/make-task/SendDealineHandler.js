"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendDealineHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
class SendDealineHandler {
    static async handler(param) {
        const _mailService = typedi_1.default.get('mail.service');
        const _clientRepository = typedi_1.default.get('client.repository');
        const interval = setInterval(async () => {
            const arr1 = param.dealine.split(" ");
            const arr1b = arr1.slice(0, 5);
            const finalDeadline = arr1b.join(" ");
            const dateNow = new Date();
            const date = dateNow.toString();
            const arr2 = date.split(" ");
            const arr2b = arr2.slice(0, 5);
            const arrtime = arr2b[4].split(":");
            const hh = Number(arrtime[0]) + 7;
            arrtime.splice(0, 1, String(hh));
            const fnTime = arrtime.join(":");
            arr2b.splice(4, 1, fnTime);
            const finalDate = arr2b.join(" ");
            console.log(finalDeadline, finalDate);
            if (finalDate === finalDeadline) {
                clearItv();
            }
        }, 1000);
        const clearItv = async () => {
            clearInterval(interval);
            const dealine = param.dealine;
            const user = await _clientRepository.getById(param.userid);
            if (!user) {
                throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
            }
            await _mailService.sendMailNotify(user.email, param.data.title, dealine);
        };
    }
}
exports.SendDealineHandler = SendDealineHandler;
