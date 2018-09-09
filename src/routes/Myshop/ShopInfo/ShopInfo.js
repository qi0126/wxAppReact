import React from 'react';
import { connect } from 'dva';
import styles from './ShopInfo.less';

const ShopInfo = () => {
  return (
    <div className={styles.shopInfo} >
      <div className={styles.sAudit}>
        <div className={styles.top}>
          <div className={styles.tit}>店铺信息</div>
        </div>
      </div>
    </div>
  );
};

ShopInfo.propTypes = {

};

export default connect(({ shopInfo }) => ({
  shopInfo,
}))(ShopInfo);
