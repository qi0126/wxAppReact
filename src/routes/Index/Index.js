import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import BatarHeaderTop from '../../components/batarHeaderTop/batarHeaderTop';
import BatarHeader from '../../components/batarHeader/batarHeader';
import BatarAside from '../../components/batarAside/batarAside';
// import BatarMain from '../../components/batarMain/batarMain';
import tool from '../../app.js';

import styles from './Index.less';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 初始化
      sideList: {
        id: 1,
        name: '挑选产品库',
        menuUrl: '/product/sellerPro',
        childs: [
          {
            id: 11,
            name: '商家品牌',
            menuUrl: '/product/sellerPro',
          },
          {
            id: 12,
            name: '设计师款',
            menuUrl: '/product/designerPro',
          },
        ],
      },
      // 列表
      tabList: [
        {
          id: 1,
          name: '挑选产品库',
          menuUrl: '/product/sellerPro',
          childs: [
            {
              id: 11,
              name: '商家品牌',
              menuUrl: '/product/sellerPro',
            },
            {
              id: 12,
              name: '设计师款',
              menuUrl: '/product/designerPro',
            },
          ],
        },
        {
          id: 2,
          name: '我的店铺',
          childs: [
            {
              id: 21,
              name: '店铺信息',
              menuUrl: '/myShop/shopInfo',
            },
            {
              id: 22,
              name: '上传产品',
              menuUrl: '/myShop/uploadProduct',
            },
            {
              id: 23,
              name: '产品管理',
              menuUrl: '/myShop/productMana',
            },
            {
              id: 24,
              name: '订单中心',
              menuUrl: '/myShop/orderCenter',
            },
          ],
        },
        {
          id: 3,
          name: '设计师',
          childs: [
            {
              id: 31,
              name: '上传产品',
              menuUrl: '/designer/uploadPro',
            },
            {
              id: 32,
              name: '作品管理',
              menuUrl: '/designer/proManage',
            },
            {
              id: 33,
              name: '销售数据',
              menuUrl: '/designer/saleData',
            },
          ],
        },
        {
          id: 4,
          name: '个人中心',
          childs: [
            {
              id: 41,
              name: '我的资料',
              menuUrl: '/me',
            },
            {
              id: 42,
              name: '密码设置',
              menuUrl: '/me/passWord',
            },
          ],
        },
        {
          id: 43,
          name: '今日金价',
          childs: [
            {
              id: 44,
              name: '',
              menuUrl: '/home',
            },
          ],
        },
        {
          id: 5,
          name: '钻石证书查询',
          childs: [
            {
              id: 51,
              name: '',
              menuUrl: '/Certificate',
            },
          ],
        },
        {
          id: 6,
          name: '平台管理',
          childs: [
            {
              id: 61,
              name: '账号管理',
              menuUrl: '/platformMana/accountMana',
            },
            {
              id: 62,
              name: '产品审核',
              menuUrl: '/platformMana/productAudit',
            },
            {
              id: 63,
              name: '产品库管理',
              menuUrl: '/platformMana/productLibMana',
            },
            {
              id: 64,
              name: '订单中心',
              menuUrl: '/platformMana/orderCenter',
            },
            {
              id: 65,
              name: '材质管理',
              menuUrl: '/platformMana/MaterManage',
            },
            {
              id: 66,
              name: '设计师国家',
              menuUrl: '/platformMana/DesignerCity',
            },
          ],
        },
        {
          id: 7,
          name: '我的工厂',
          childs: [
            // {
            //   id: 71,
            //   name: '上传产品',
            //   menuUrl: '/MyFactory/uploadPro',
            // },
            {
              id: 72,
              name: '产品管理',
              menuUrl: '/MyFactory/proManage',
            },
            {
              id: 73,
              name: '订单中心',
              menuUrl: '/MyFactory/orderCenter',
            },
          ],
        },
      ],
    };
  }

  getSlide(item) {
    this.context.router.push(item.childs[0].menuUrl);
    item.childs.forEach((it) => {
      it.checked = false;
    });
    item.childs[0].checked = true;
    this.setState({
      sideList: item,
    });
  }

  render() {
    return (
      <div className={styles.bodyWrap}>
        <BatarHeaderTop />
        <BatarHeader tabList={this.state.tabList} changeSide={(item) => { this.getSlide(item); }} />
        <div className={styles.contentWrap}>
          <BatarAside sideList={this.state.sideList} />
          {/* <BatarMain></BatarMain> */}
          <div className={styles.mainWrap} id="aaa">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}

Index.propTypes = {
  children: PropTypes.object.isRequired,
};

Index.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect()(Index);
