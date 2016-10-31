//路由入口
import Router from 'koa-router';
import indexCtrl from '../controllers/indexCtrl';
import usersCtrl from '../controllers/usersCtrl';
import formCtrl from '../controllers/formCtrl';
const router = new Router();
router.prefix('/api');

router.get('/',indexCtrl);
router.get('/users',usersCtrl);
router.post('/form',formCtrl)

export default router;