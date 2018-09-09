// import React from 'react';
// import { Router, Route, Switch } from 'dva/router';
// import PropTypes from 'prop-types';
// import IndexPage from './routes/IndexPage';
// import Index from './routes/Index/Index';
// import Me from './routes/Me/Me';

// import Products from './routes/Products';

import React from 'react';
import PropTypes from 'prop-types';
import {
  Router,
} from 'dva/router';
// import App from './routes/App';
import Index from './routes/Index/Index';


// const registerModel = (app, model) => {
//   if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
//     app.model(model);
//   }
// };

const Routers = ({
  history,
  // app,
}) => {
  const routes = [{
    path: '/',
    component: Index,
    getIndexRoute(nextState, cb) {
      require.ensure([], (require) => {
        // registerModel(app, require('models/dashboard'))
        cb(null, {
          component: require('./routes/Me/Me/Me'),
        });
      }, 'me');
    },
    childRoutes: [
      // 富文本
      {
        path: 'editor',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./components/umeditor/umeditor'));
          }, 'umeditor-umeditor');
        },
      },

      // indexSlide
      {
        path: 'indexSlide',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./components/indexSlide/indexSlide'));
          }, 'indexSlide-indexSlide');
        },
      },

      // 完善信息

      /**
       * 申请店铺
       */
      // 完善信息
      {
        path: 'applyShop/completeInfo',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/ApplyShop/CompleteInfo/CompleteInfo'));
          }, 'applyShop-completeInfo');
        },
      },
      // 店铺资料
      {
        path: 'applyShop/shopData',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/ApplyShop/ShopData/ShopData'));
          }, 'applyShop-shopData');
        },
      },

      // 店铺申请平台审核
      {
        path: 'applyShop/platformAudit',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/ApplyShop/PlatformAudit/PlatformAudit'));
          }, 'applyShop-platformAudit');
        },
      },

      /**
       * 申请设计师
       */
      // 完善信息
      {
        path: 'applyDesigner/completeInfo',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/ApplyDesigner/CompleteInfo/CompleteInfo'));
          }, 'applyDesigner-completeInfo');
        },
      },
      // 上传作品
      {
        path: 'applyDesigner/uploading',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/ApplyDesigner/Uploading/Uploading'));
          }, 'applyDesigner-uploading');
        },
      },

      // 设计师申请平台审核
      {
        path: 'applyDesigner/platformAudit',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/ApplyDesigner/PlatformAudit/PlatformAudit'));
          }, 'applyDesigner-platformAudit');
        },
      },

      /**
       * 个人中心
       */

      // 我的资料
      {
        path: 'me',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/Me/Me/Me'));
          }, 'me');
        },
      },
      // 更改密码
      {
        path: 'me/passWord',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/Me/PassWord/PassWord'));
          }, 'me-passWord');
        },
      },

      /**
       * 平台管理
       */
      // 帐号管理
      {
        path: 'platformMana/accountMana',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/PlatformMana/AccountMana/AccountMana'));
          }, 'platformMana-accountMana');
        },
      },
      // 创建店铺
      {
        path: 'platformMana/accountMana/createShop',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/PlatformMana/AccountMana/CreateShop/CreateShop'));
          }, 'platformMana-accountMana-createShop');
        },
      },
      // 创建设计师
      {
        path: 'platformMana/accountMana/createDesigner',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/PlatformMana/AccountMana/CreateDesigner/CreateDesigner'));
          }, 'platformMana-accountMana-createDesigner');
        },
      },
      // 创建工厂
      {
        path: 'platformMana/accountMana/createPlat',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/PlatformMana/AccountMana/CreatePlat/CreatePlat'));
          }, 'platformMana-accountMana-createPlat');
        },
      },
      // 店铺审核
      {
        path: 'platformMana/shopApply',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/PlatformMana/ShopApply/ShopApply'));
          }, 'platformMana-shopApply');
        },
      },
      // 设计师审核
      {
        path: 'platformMana/designerApply',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/PlatformMana/DesignerApply/DesignerApply'));
          }, 'platformMana-shopApply');
        },
      },
      // 产品审核
      {
        path: 'platformMana/productAudit',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/PlatformMana/ProductAudit/ProductAudit'));
          }, 'platformMana-productAudit');
        },
      },
      // 产品库管理
      {
        path: 'platformMana/productLibMana',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/PlatformMana/ProductLibMana/ProductLibMana'));
          }, 'platformMana-productLibMana');
        },
      },
      // 订单中心
      {
        path: 'platformMana/orderCenter',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/PlatformMana/OrderCenter/OrderCenter'));
          }, 'platformMana-orderCenter');
        },
      },
      // 材质管理
      {
        path: 'platformMana/MaterManage',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/PlatformMana/MaterManage/MaterManage'));
          }, 'platformMana-MaterManage');
        },
      },
      // 设计师国家
      {
        path: 'platformMana/DesignerCity',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/PlatformMana/DesignerCity/DesignerCity'));
          }, 'platformMana-DesignerCity');
        },
      },
      /**
       * 我的店铺
       */

      // 店铺信息
      {
        path: 'myShop/shopInfo',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/Myshop/ShopInfo/ShopInfo'));
          }, 'myShop-shopInfo');
        },
      },
      // 上传产品
      {
        path: 'myShop/uploadProduct',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/Myshop/UploadProduct/UploadProduct'));
          }, 'myShop-uploadProduct');
        },
      },
      // 产品管理
      {
        path: 'myShop/productMana',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/Myshop/ProductMana/ProductMana'));
          }, 'myShop-productMana');
        },
      },
      // 订单中心
      {
        path: 'myShop/orderCenter',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            // registerModel(app, require('models/dashboard'))
            cb(null, require('./routes/Myshop/OrderCenter/OrderCenter'));
          }, 'myShop-orderCenter');
        },
      },
      /**
       * 挑选产品库
       */
      // 商家品牌款
      {
        path: 'product/sellerPro',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/Product/SellerPro/SellerPro'));
          }, 'sellerPro');
        },
      },
      // 设计师款
      {
        path: 'product/designerPro',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/Product/DesignerPro/DesignerPro'));
          }, 'designerPro');
        },
      },

      /*
       * 设计师模块
       */
      // 上传作品
      {
        path: 'designer/uploadPro',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/Designer/uploadPro/uploadPro'));
          }, 'uploadPro');
        },
      },
      // 产品管理
      {
        path: 'designer/proManage',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/Designer/proManage/proManage'));
          }, 'proManage');
        },
      },
      // 销售数据
      {
        path: 'designer/saleData',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/Designer/saleData/saleData'));
          }, 'saleData');
        },
      },
      /*
       * 我的工厂
       */
      // 上传作品
      {
        path: 'MyFactory/uploadPro',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/MyFactory/uploadPro/uploadPro'));
          }, 'myfamUploadPro');
        },
      },
      // 产品管理
      {
        path: 'MyFactory/proManage',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/MyFactory/proManage/proManage'));
          }, 'myfamProManage');
        },
      },
      // 订单中心
      {
        path: 'MyFactory/orderCenter',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/MyFactory/orderCenter/orderCenter'));
          }, 'myfamOrderCenter');
        },
      },
      {
        path: 'MyFactory/orderDetail',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/MyFactory/orderCenter/orderDetail'));
          }, 'MyFactoryOrderDetail');
        },
      },
      /**
       * 钻石证书查询
       */
      {
        path: 'Certificate',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/Certificate/Certificate/Certificate'));
          }, 'Certificate');
        },
      },
    ],
  }, {
    path: '/home',
    // component: Index,
    getIndexRoute(nextState, cb) {
      require.ensure([], (require) => {
        // registerModel(app, require('models/dashboard'))
        cb(null, {
          component: require('./routes/Login/Home/Home'),
        });
      }, 'login-home');
    },
  }, {
    path: '/login',
    component: Index,
    getIndexRoute(nextState, cb) {
      require.ensure([], (require) => {
        // registerModel(app, require('models/dashboard'))
        cb(null, {
          component: require('./routes/Login/Login/Login'),
        });
      }, 'login-login');
    },
  }, {
    path: '/register',
    // component: Index,
    getIndexRoute(nextState, cb) {
      require.ensure([], (require) => {
        // registerModel(app, require('models/dashboard'))
        cb(null, {
          component: require('./routes/Login/Register/Register'),
        });
      }, 'login-register');
    },
  }];

  return (<Router
    history={
    history
  }
    routes={
    routes
  }
  />);
};

Routers.propTypes = {
  history: PropTypes.object,
  // app: PropTypes.object,
};

export default Routers;
