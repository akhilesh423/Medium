import { Hono } from 'hono';
import authRoutes from "./routes/authRoutes"
import blogRoutes from "./routes/blogRoutes"

export const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

app.get("/", (c) => {
  return c.text("health checkv1")
})

app.route('/api/user', authRoutes)
app.route('/api/blog', blogRoutes)

export default app


