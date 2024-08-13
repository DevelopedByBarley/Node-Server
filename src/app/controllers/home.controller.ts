import { Request, Response } from "express"

// src/models/user.model.ts
const index = async (req: Request, res: Response) => {
    res.send('Hello world from Home Controller!');
}

export { index } 