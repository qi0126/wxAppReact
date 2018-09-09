import React from 'react';
import { connect } from 'dva';
import styles from './ProductMana.less';

const ProductMana = () => {
  return (
    <div className={styles.productMana}>
      <div className={styles.sAudit}>
        <div className={styles.top}>
          <div className={styles.tit}>产品管理</div>
        </div>
      </div>
    </div>
  );
};

ProductMana.propTypes = {

};

export default connect(({ productMana }) => ({
  productMana,
}))(ProductMana);
