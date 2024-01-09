// import {dbRequestExecuter} from "./../database";

export const worktimeModel = {
    "getAllWorkTimeData": async () => {
        try {
            // const results = await dbRequestExecuter("SELECT * FROM [table_name]");
            const results = "temporary";
            return results;
        } catch (err) {
            console.trace(err);
        }
        return null;
    },
};
