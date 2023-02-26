"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const db_1 = require("../db");
const findAll = (callback) => {
    const queryString = `
        SELECT * from test`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const users = [];
        rows.forEach(row => {
            const user = {
                testid: row.testid,
                testname: row.testname
            };
            users.push(user);
        });
        callback(null, users);
    });
};
exports.findAll = findAll;
