import React from 'react';
import { connect } from 'dva';
import { Steps } from 'antd';
import { Button } from 'antd';
import styles from './ShopData.less';

const Step = Steps.Step;

const ShopData = () => {
  return (
    <div className={styles.shopData} >
      {/* 店铺申请进度 */}
      <div className={styles.sAudit}>
        <div className={styles.top}>
          <div className={styles.tit}>店铺申请进度</div>
        </div>
        <div>
          <Steps current={1}>
            <Step title="注册账号" />
            <Step title="完善信息" />
            <Step title="店铺资料" description="进行中..." />
            <Step title="平台审核" />
          </Steps>
        </div>
      </div>

      <div style={{ height: 10, weight: 10, background: '#f8f8f8' }} />
      {/* 店铺资料 */}

      <div className={`${styles.sAudit} ${styles.shopData}`} >
        <div className={styles.top}>
          <div className={styles.tit}>完善信息</div>
          <div className={styles.right}>您所命名的店铺名称及logo只做临时申请，待平台审核后方可生效</div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.left} ${styles.dot}`}>店铺名称：</div>
          <div className={styles.right}><input type="text" placeholder="请输入您的姓名" /></div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.left} ${styles.dot}`}>店铺logo：</div>
          <div className={`${styles.right} ${styles.logo}`} >
            <div> <img className={styles.logoImg} src="" alt="" /> </div>
            <p>请上传格式为JPG或png格式的图片，大小1Mb以内</p>
          </div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.left} ${styles.dot}`}>店铺介绍：</div>
          <div className={`${styles.right} ${styles.textArea}`}>
            <div className={styles.text}>
              <textarea placeholder="请输入店铺介绍信息......" name="" id="" cols="30" rows="10" />
            </div>
            <p>(0/300字节）</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.btn}>
            <Button type="primary" size="large">上一步</Button>
            <Button style={{ marginLeft: '35px' }} type="primary" size="large">提交申请</Button>
          </div>
        </div>
      </div>


    </div>
  );
};

ShopData.propTypes = {

};

export default connect(({ shopData }) => ({
  shopData,
}))(ShopData);
