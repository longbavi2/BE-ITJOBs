const { connection, connectionPromise } = require("../config/database")
const getAllUsers = async () => {
    let [result, fields] = await connectionPromise.query('select * from Users');
    const Result = result.length > 0 ? result : {};
    return Result
}
const getEditUserById = async (id) => {

    const [result, fields] = await connectionPromise.query(`select * from Users where id= ?`,
        [id], (err, results, fields) => {
            if (err) {
                console.error('Lỗi truy vấn SQL:', err);
                return res.status(500).json({ message: 'Lỗi truy vấn SQL.' });
            }
        }
    )
    const Result = result.length > 0 ? result : {};
    return Result
}
const updateUser = async (email, name, city, userId) => {
    const [results, fields] = await connectionPromise.query(`UPDATE Users
     SET email = ?, name = ?, city= ?
     WHERE id = ? `, [email, name, city, userId],
        (err, results, fields) => {
            if (err) {
                console.error('Lỗi truy vấn SQL:', err);
                return res.status(500).json({ message: 'Lỗi truy vấn SQL.' });
            }
        }
    )
}
const daleteUserById = async (userId) => {
    const [results, fields] = await connectionPromise.query(
        `DELETE FROM Users WHERE id= ?`, [userId],
        (err, results, fields) => {
            if (err) {
                console.error('Lỗi truy vấn SQL:', err);
                return res.status(500).json({ message: 'Lỗi truy vấn SQL.' });
            }
        }
    )
}
const createNewUsers = async (email, name, city) => {
    const [ressult, fields] = await connectionPromise.query(
        `INSERT INTO Users(email,name,city)
        VALUES (?, ?,?)
        `, [email, name, city],
        (err, results, fields) => {
            if (err) {
                console.error('Lỗi truy vấn SQL:', err);
                return res.status(500).json({ message: 'Lỗi truy vấn SQL.' });
            }
        }
    );
}
module.exports = {
    getAllUsers, getEditUserById, updateUser, daleteUserById, createNewUsers
}