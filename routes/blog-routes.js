import express from "express";

const router=express.Router();

import { addBlog ,getAllBlogs } from "../controllers/blog-controller";

router.post("/addBlog",addBlog);

router.get("/allblogs");

export default router;