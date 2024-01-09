import {Request, Response} from "express";

import {worktimeModel} from "./../models/main";

const mainController = {
    "getData": async (_req: Request, res: Response) => {
        try {
            const response = await worktimeModel.getAllWorkTimeData();
            res.json(response);
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
};

export default mainController;
