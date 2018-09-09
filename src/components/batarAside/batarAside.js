import React from 'react';
import PropTypes from 'prop-types';
import styles from './batarAside.less';

class batarAside extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    // this.props.sideList.childs[0].checked = true;
    // this.context.router.push(this.props.sideList.childs[0].menuUrl);
  }

  goUrl(item) {
    this.context.router.push(item.menuUrl);
    this.props.sideList.childs.forEach((iit) => {
      iit.checked = false;
    });
    item.checked = true;
    this.setState({
      item,
    });
  }

  render() {

    return (
      <div className={styles.asideWrap}>
        <h3>{this.props.sideList.name}</h3>

        {this.props.sideList.childs.map((item) => {
          return <p className={item.checked && styles.on} key={item.id} onClick={this.goUrl.bind(this, item)}>{item.name}</p>;
        })}

        {/* <h3>挑选产品库</h3>
        <p><Link to={'/product/sellerPro'}>商家品牌款</Link></p>
        <p><Link to={'/product/designerPro'}>设计师款</Link></p>
        <h3>我的店鋪</h3>
        <p><Link to={'/myShop/shopInfo'}>店铺信息</Link></p>
        <p><Link to={'/myShop/uploadProduct'}>上传产品</Link></p>
        <p><Link to={'/myShop/productMana'}>产品管理</Link></p>
        <p><Link to={'/myShop/orderCenter'}>订单中心</Link></p>
        <h3>设计师</h3>
        <p><Link to={'/designer/uploadPro'}>上传产品</Link></p>
        <p><Link to={'/designer/proManage'}>产品管理</Link></p>
        <p><Link to={'/designer/saleData'}>销售数据</Link></p>
        <h3>个人中心</h3>
        <p><Link to={'/me'}>我的资料</Link></p>
        <p><Link to={'/me/passWord'}>密码设置</Link></p> */}
        {/* <h3>今日金价</h3>
      <h3>钻石证书查询</h3> */}
        {/* <h3>平台管理</h3> */}
        {/* <p><Link to={'/platformMana/shopApply'}>店铺申请</Link></p>
      <p><Link to={'/platformMana/designerApply'}>设计师申请</Link></p> */}
        {/* <p><Link to={'/platformMana/accountMana'}>帐号管理</Link></p>
        <p><Link to={'/platformMana/productAudit'}>产品审核</Link></p>
        <p><Link to={'/platformMana/productLibMana'}>产品库管理</Link></p>
        <p><Link to={'/platformMana/orderCenter'}>订单中心</Link></p>
        <p><Link to={'/platformMana/MaterManage'}>今日金价</Link></p>
        <h3>店铺申请进度</h3>
        <p><Link to={'/applyShop/completeInfo'}>完善信息</Link></p>
        <p><Link to={'/applyShop/shopData'}>店铺资料</Link></p>
        <p><Link to={'/applyShop/platformAudit'}>平台审核</Link></p>
        <h3>设计师申请进度</h3>
        <p><Link to={'/applyDesigner/completeInfo'}>完善信息</Link></p>
        <p><Link to={'/applyDesigner/uploading'}>上传作品</Link></p>
        <p><Link to={'/applyDesigner/platformAudit'}>平台审核</Link></p>
        <h3>我的工厂</h3>
        <p><Link to={'/MyFactory/uploadPro'}>上传产品</Link></p>
        <p><Link to={'/MyFactory/proManage'}>产品管理</Link></p>
        <p><Link to={'/MyFactory/orderCenter'}>订单中心</Link></p> */}
      </div>
    );
  }
}

batarAside.propTypes = {
  sideList: PropTypes.object,
  list: PropTypes.array,
};

batarAside.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default batarAside;
