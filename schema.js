const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
        location: Joi.string().required(),
        country: Joi.string().required(),
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    rating: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        message: Joi.string().required,
    }),
});