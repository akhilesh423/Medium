"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.createBlog = void 0;
const zod_1 = require("zod");
exports.createBlog = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
exports.updateBlog = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    id: zod_1.z.number()
});
