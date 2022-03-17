const app = require("express")()
const cookie = "req.headers.cookie; samesite=strict; secure";
res.setHeader("set-cookie", [cookie])
