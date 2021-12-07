const Payments = require('../models/paymentModel')
const Users = require('../models/userModel')
const Products = require('../models/productModel')


const paymentCtrl = {
    getPayments: async(req, res) => {
        try {
            const payments = await Payments.find()
            res.json(payments)
        } catch (err) {
            return res.status(515).json({msg: err.message})
        }
    },
    createPayment: async(req, res) => {
        try {
            const user = await Users.findOne({_id: req.headers.id}).select('name email')
            if(!user) return res.status(415).json({msg: "User does not exist."})

            const {cart, paymentID, address} = req.body
            const {_id, name, email} = headers;

            const newPayment = new Payments({
                headers_id: _id, name, email, cart, paymentID, address
            })

            res.json({newPayment})

        } catch (err) {
            return res.status(515).json({msg: err.message})
        }
    }
}


module.exports = paymentCtrl