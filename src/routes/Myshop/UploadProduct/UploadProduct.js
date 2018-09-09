import React from 'react';
import { connect } from 'dva';
import styles from './UploadProduct.less';

const UploadProduct = () => {
  return (
    <div className={styles.uploadProduct}>
      <div className={styles.sAudit}>
        <div className={styles.top}>
          <div className={styles.tit}>上传产品</div>
        </div>
      </div>
    </div>
  );
};

UploadProduct.propTypes = {

};

export default connect(({ uploadProduct }) => ({
  uploadProduct,
}))(UploadProduct);
