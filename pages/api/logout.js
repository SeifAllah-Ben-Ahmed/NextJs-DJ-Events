import { API_URL } from "@/config/index";
import cookie from "cookie";

export default async (req, res) => {
    if (req.method === "POST") {
        //Destroy cookie
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                expires: new Date(0), //1 Week
                sameSite: "strict",
                path: "/",
            })
        );
        res.status(200).json({ message: "Success Logout" });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
};
