import React from 'react';
import { connect } from 'dva';
import styles from './CompleteInfo.less';

const CompleteInfo = () => {
  return (
    <div className={styles.completeInfo} >
      <div className={styles.sAudit}>
        <div className={styles.top}>
          <div className={styles.tit}>店铺信息</div>
        </div>
      </div>
    </div>
  );
};

CompleteInfo.propTypes = {

};

export default connect(({ completeInfo }) => ({
  completeInfo,
}))(CompleteInfo);
