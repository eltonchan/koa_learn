/**
 * Created by mac on 2017/5/6.
 */
import User from './model/User'
const Koa = require('koa');
const app = new Koa();

// response
app.use(async ctx => {
    let name = await User.findOne();
    ctx.body = name;
});

app.listen(3200);