import { Hono } from "hono"


const auth = new Hono()

auth.post("/signup", (c) => {
    return c.text("signup route here.")
})


auth.post("/signin", (c) => {
    return c.text("signup route here.")
})


export default auth