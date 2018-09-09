import React from 'react';
import { connect } from 'dva';
import styles from './Uploading.less';

const Uploading = () => {
  return (
    <div className={styles.uploading} >
      <div className={styles.sAudit}>
        <div className={styles.top}>
          <div className={styles.tit}>店铺信息</div>
        </div>
      </div>
    </div>
  );
};

Uploading.propTypes = {

};

export default connect(({ uploading }) => ({
  uploading,
}))(Uploading);
