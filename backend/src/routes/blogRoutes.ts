import { Hono } from "hono"


const blog = new Hono()

blog.get("/", (c) => {
    return c.text("blog route here.")
})

blog.post("/", (c) => {
    return c.text("blog route here.")
})

blog.put('/:id', (c) => {
    return c.text("blog update route here")
})

export default blog