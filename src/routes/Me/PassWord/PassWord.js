import React from 'react';
import { connect } from 'dva';
import styles from './PassWord.less';

const PassWord = () => {
  return (
    <div className={styles.me}>
      <div className={styles.tit}>密码设置</div>
      <div className={styles.datum}>
        <div className={styles.datumRow}>
          <p className={styles.name}>姓名:</p>
          <p className={styles.value}>李小君</p>
          <p className={styles.name}>性别:</p>
          <p className={styles.value}>女</p>
        </div>
      </div>
      <div className={styles.datum}>
        <div className={styles.datumRow}>
          <p className={styles.name}>手机号:</p>
          <p className={styles.value}>15623413601</p>
          <p className={styles.name}>邮箱:</p>
          <p className={styles.value}>15623413601@gmail.com</p>
        </div>
      </div>
      <div className={styles.datum}>
        <div className={styles.datumRow}>
          <p className={styles.name}>您目前的职业:</p>
          <p className={styles.value}>自由职业</p>
          <p className={styles.name}>实体珠宝门店:</p>
          <p className={styles.value}>江苏省苏州市相城区观前街36号</p>
        </div>
      </div>
      <div className={styles.datum}>
        <div className={styles.datumRow}>
          <p className={styles.name}>您目前的职业:</p>
          <p className={styles.value}>自由职业</p>
          <p className={styles.name}>实体珠宝门店:</p>
          <p className={styles.value}>江苏省苏州市相城区观前街36号</p>
        </div>
      </div>
    </div>
  );
};

PassWord.propTypes = {

};

export default connect()(PassWord);
