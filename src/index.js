import dva from 'dva';
import './index.less';

import './style/index.less';

// 1. Initialize
const app = dva();

console.log(app);

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
// app.model(require('./models/products'));

// 个人中心
app.model(require('./models/Me/me'));
app.model(require('./models/Me/passWord'));

// 平台管理
app.model(require('./models/PlatformMana/accountMana'));
app.model(require('./models/PlatformMana/shopApply'));
app.model(require('./models/PlatformMana/designerApply'));
app.model(require('./models/PlatformMana/productAudit'));
app.model(require('./models/PlatformMana/productLibMana'));
app.model(require('./models/PlatformMana/orderCenter'));

// 我的店铺
app.model(require('./models/MyShop/shopInfo'));
app.model(require('./models/MyShop/uploadProduct'));
app.model(require('./models/MyShop/productMana'));
app.model(require('./models/MyShop/orderCenter'));

// 店铺申请审核
app.model(require('./models/ApplyShop/shopData'));
app.model(require('./models/ApplyShop/completeInfo'));
app.model(require('./models/ApplyShop/platformAudit'));

// 设计师
app.model(require('./models/Designer/saleData'));
app.model(require('./models/Designer/proManage'));
app.model(require('./models/Designer/uploadPro'));
// 设计师申请审核
app.model(require('./models/ApplyDesigner/completeInfo'));
app.model(require('./models/ApplyDesigner/platformAudit'));
app.model(require('./models/ApplyDesigner/uploading'));

// 挑选产品库
app.model(require('./models/Product/sellerPro'));
app.model(require('./models/Product/designerPro'));

// 我的工厂
app.model(require('./models/MyFamily/orderCenter'));
app.model(require('./models/MyFamily/proManage'));
app.model(require('./models/MyFamily/uploadPro'));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
