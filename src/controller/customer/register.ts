import CustomerService from "../../service/CustomerService";
import {Request, Response} from "express";
import isEmpty from "is-empty"

const customerService = new CustomerService();
const utils = require('../../libs/utils');

module.exports = (req: Request, res: Response) => {


    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password
    const phone = req.body.phone;

    // if (isEmpty(first_name) || isEmpty(last_name) || isEmpty(email) || isEmpty(username) || isEmpty(password) || isEmpty(phone)) {
    //     return res.status(400).json({
    //         message: "Missing required fields body"
    //     });
    // }

    return utils.cryptPassword(password, utils.generateSalt()).then((hash: string) => {
        const newCustomer = {
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: hash,
            phone: phone,
        };

        return customerService.register(newCustomer).then((customer) => {
            const token = utils.generateToken(customer?.id?.toString());

            res.json({
                success: true,
                token: token
            })
        })

    }).catch((err: Error) => {
        // console.log(err);
        return res.status(500).json({
            code: 500,
            message: err
        })

    })
}
