import {Request, Response} from "express";

import {errorSaver} from "../utilities/errorSaver";
import {worktimeModel} from "./../models/main";

const mainController = {
    "getData": async (_req: Request, res: Response) => {
        try {
            const response = await worktimeModel.getAllWorkTimeData();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(["server-error"]);
            const errorF = error as Error;
            await errorSaver(
                "get-user-data-failed",
                JSON.stringify(errorF.stack)
            );
        }
    },
};

export default mainController;
