import {UserInfo} from "../types/user";
import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const findAll = (callback: Function) => {
    const queryString = `
        SELECT * from test`

    db.query(queryString, (err, result) => {
        if (err) {callback(err)}

        const rows = <RowDataPacket[]> result;
        const users: UserInfo[] = [];

        rows.forEach(row => {
        const user: UserInfo =  {
            testid: row.testid,
            testname: row.testname
        }
        users.push(user);
        });
        callback(null, users);
    });
}
