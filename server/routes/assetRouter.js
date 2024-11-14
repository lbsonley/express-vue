import express from "express";

const router = express.Router();

router.get(/\.(svg|png|jpg|jpeg|mp4|webp)/, (req, res) => {
  console.log("should redirect");
  res.redirect(303, `http://localhost:5173/source${req.path}`);
});

export default router;
