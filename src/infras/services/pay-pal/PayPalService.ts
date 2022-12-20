import { Service } from "typedi";
import { IPaypalService } from "../../../core/gateways/services/IPaypalService";
import * as paypal from 'paypal-rest-sdk'
import { CLIENT_ID, CLIENT_SECRET, MODE } from "../../../configs/Configuration";
import { SystemError } from "../../../core/shared/exceptions/SystemError";
import { MessageError } from "../../../core/shared/exceptions/message/MessageError";

@Service("paypal.service")
export class PaypalService implements IPaypalService{
    private _paypal = paypal

    constructor(){
        this._paypal.configure({
            client_id:CLIENT_ID ,
            client_secret: CLIENT_SECRET,
            mode:MODE
        })
    }
    async pay():Promise<void>{
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
                        "name": "Nâng cấp dịch vụ tại DOLS",
                        "sku": "001",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "Nâng cấp dịch vụ tại DOLS"
            }]
        };
    

        return this._paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw new SystemError(MessageError.SOMETHING_WRONG)
            } 
            if(!payment){
                throw new SystemError(MessageError.SOMETHING_WRONG)
            }
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                  payment.links[i].href
                }
            }

            
        });

       
    }
}

