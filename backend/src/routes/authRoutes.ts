import { Hono } from "hono"
import { signupValidation } from "@akhilesh423/medium-clone"

type Bindings = {
    MY_BUCKET: R2Bucket
    USERNAME: string
    PASSWORD: string
}
interface SignupRequestBody {
    username: String
    password: String
}

const auth = new Hono<{ Bindings: Bindings }>()

auth.post("/signup", async (c) => {
    const userBody = await c.req.json<SignupRequestBody>()
    if (!userBody.username || !userBody.password) {
        return c.json({
            msg: "Username or password is missing!"
        }, 400)
    }

})


auth.post("/signin", (c) => {
    return c.text("signup route here.")
})


export default auth