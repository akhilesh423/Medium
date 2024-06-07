import { Hono } from 'hono';
import authRoutes from "./routes/authRoutes"
import blogRoutes from "./routes/blogRoutes"

const app = new Hono();

app.get("/", (c) => {
  return c.text("hello world")
})

app.route('/api/user', authRoutes)
app.route('/api/blog', blogRoutes)

export default app;
