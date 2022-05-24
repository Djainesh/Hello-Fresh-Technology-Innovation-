//Author: Purvilkumar Sanjaysinh Bharthania (B00901605)

const shortid = require("shortid");
const STRIPE_SECRET_KEY = "sk_test_51KlbyuLgYQ53RYMR6K53P1XcOYWYUdynw7oXGW57SrY7E2L01oZ5QXqUR8KXi8PujGVf78AWhGRUsbbYwGMHGh5b00Ba6lffrP";

const router = require("express").Router();

const stripe = require("stripe")(STRIPE_SECRET_KEY);

router.post("/make", async (req, res) => {
    try {
        const { items, token, total } = req.body;
        const idempotencyKey = shortid.generate();

        return stripe.customers
            .create({
                email: token.email,
                source: token.id,
            })
            .then((customer) => {
                stripe.charges
                    .create(
                        {
                            amount: total,
                            currency: "cad",
                            customer: customer.id,
                            receipt_email: token.email,
                            shipping: {
                                name: token.card.name,
                                address: {
                                    country: token.card.address_country,
                                },
                            },
                        },
                        { idempotencyKey }
                    )
                    .then((result) =>
                        res.status(200).json({
                            success: true,
                            result,
                        })
                    );
            });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error.",
            success: false,
        });
    }
});

module.exports = router;
