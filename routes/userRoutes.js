const { json } = require('express');
const fs = require('fs');
const { join } = require('path');


const filepath = join(__dirname, 'users.json');

const getUsers = () => {
    const data = fs.existsSync(filepath)
        ? fs.readFileSync(filepath)
        : []

    try {
        return json.parse(data);

    } catch(error) {
        return [];
    }
}
const saveUser = (users) => fs.writeFileSync(filepath, JSON.stringify(users, null, '\t'))

const userRoutes = (app) => {
    app.route('/users/:id?');
        .get((req, res) => {
            const users = getUsers()

            res.send({ users })
        })
}

module.exports = userRoutes