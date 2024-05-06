app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://cardoctor-bd.web.app",
            "https://cardoctor-bd.firebaseapp.com",
        ],
        credentials: true,
    })
);


const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};
