import Joi from "joi";

export const postValidator = Joi.object({


    title: Joi.string().min(4).max(10).required().messages({
        'string.min':'must have at least 4 characters',
        'string.max':'must have no longer 10 characters',

    }),

    body: Joi.string().min(5).max(250).required(). messages({
        'string.min':'body must be at least 5 characters',
        'string.max':'body must be no longer 250 characters',
    }),

    userId: Joi.string().min(5).max(255).required().messages({
        'number.min':'must be more than 5 characters',
        'number.max':'must be less than 255 characters',
    }),

})