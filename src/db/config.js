/**
 * Created by mac on 2017/4/30.
 */
import Sequelize from 'sequelize';

var sequelize = new Sequelize('main', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

export default sequelize;