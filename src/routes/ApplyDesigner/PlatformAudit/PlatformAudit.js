import React from 'react';
import { connect } from 'dva';
import styles from './PlatformAudit.less';

const PlatformAudit = () => {
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

PlatformAudit.propTypes = {

};

export default connect(({ platformAudit }) => ({
  platformAudit,
}))(PlatformAudit);
