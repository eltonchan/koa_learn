/**
 * Created by mac on 2017/4/30.
 */

import Sequelize from 'sequelize';
import sequelize from '../db/config';

var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Will result in an attribute that is firstName when user facing but first_name in the database
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    time: {
        type:Sequelize.DATE,
        defaultValue: new Date()
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false
});

export default User;