"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinValidation = exports.signupValidation = void 0;
const zod_1 = require("zod");
exports.signupValidation = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string().min(8),
    name: zod_1.z.string()
});
exports.signinValidation = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string().min(8)
});
