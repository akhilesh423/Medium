import { Hono } from 'hono';
import { signupValidation, signinValidation } from '@akhilesh423/medium-clone';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'



type Bindings = {
    DATABASE_URL: string,
    JWT_SECRET: string
}

const auth = new Hono<{ Bindings: Bindings }>();

auth.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasources: { db: { url: c.env.DATABASE_URL } }
    }).$extends(withAccelerate());

    try {
        const userBody = await c.req.json();
        if (!userBody.username || !userBody.password) {
            return c.json({ data: 'Username or password is missing' }, 400);
        }
        const userValidation = signupValidation.safeParse(userBody);

        if (!userValidation.success) {
            return c.json({ msg: "Invalid Input Type!" }, 400);
        }
        const usernameExists = await prisma.user.findUnique({
            where: {
                username: userBody.username,
            },
        });
        if (usernameExists) {
            return c.text('User already exists, please login!', 409);
        }
        const createUser = await prisma.user.create({
            data: {
                username: userBody.username,
                password: userBody.password,
                name: userBody.name,
            },
        });
        const payload = {
            sub: userBody.username,
            exp: Math.floor(Date.now() / 1000) + 60 * 30,
        }
        const secretToken = await sign(payload, c.env.JWT_SECRET)
        return c.json({ data: 'User created successfully', token: secretToken }, 201);
    } catch (error) {
        console.error(error);
        return c.json({ data: 'Internal server error' }, 500);
    }
});

auth.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasources: { db: { url: c.env.DATABASE_URL } }
    }).$extends(withAccelerate());
    try {
        const userBody = await c.req.json();
        const userValidation = signinValidation.safeParse(userBody)
        if (!userBody.username || !userBody.password) {
            return c.json({ msg: "Username or password is missing!" }, 400)
        }
        if (!userValidation.success) {
            return c.json({ msg: "Invalid Input Type!" }, 400);
        }
        const usernameExists = await prisma.user.findUnique({
            where: {
                username: userBody.username,
            },
        });
        if (!usernameExists) {
            return c.text('User not found, please signup!', 409);
        }
        const payload = {
            sub: userBody.username,
            exp: Math.floor(Date.now() / 1000) + 60 * 30,
        }
        const secretToken = await sign(payload, c.env.JWT_SECRET)
        if (usernameExists) {
            if (userBody.password === usernameExists.password) {
                return c.json({ token: secretToken, msg: "user successfully logged in !" }, 200)

            }
            else {
                return c.json({ msg: "incorrect password" }, 401)
            }
        }
    }
    catch (e) {
        console.log(e)
        return c.json({ msg: "internal server error" }, 500)
    }
    return c.text('signin route here.');
});

export default auth;
