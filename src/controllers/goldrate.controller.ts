import { Request, Response } from "express";

const getGoldRate = (req: Request, res: Response) => {
  res.send("Gold Rate is 50000");
};

export { getGoldRate };