import React from 'react';
import { connect } from 'dva';
import { Steps } from 'antd';
import styles from './PlatformAudit.less';

const Step = Steps.Step;

const PlatformAudit = () => {
  return (
    <div className={styles.platformAudit} >
      {/* 店铺申请进度 */}
      <div className={styles.sAudit}>
        <div className={styles.top}>
          <div className={styles.tit}>店铺申请进度</div>
        </div>
        <div>
          <Steps current={2}>
            <Step title="注册账号" />
            <Step title="完善信息" />
            <Step title="店铺资料" />
            <Step title="平台审核" description="进行中..." />
          </Steps>
        </div>
      </div>

      <div style={{ height: 10, weight: 10, background: '#f8f8f8' }} />
      {/* 提交审核 */}

      <div className={styles.submitSucces}>
        <div>
          <p>您申请资料已提交成功，请耐心等待平台审核结果！！</p>
        </div>
      </div>

      <div className={styles.auditSucces}>
        <div className={styles.name}>您好， Jennifer；</div>
        <div className={styles.info}>
          <p>恭喜您审核已通过，</p>
          <p>您已成功创建平台店铺，赶快去平台库挑选产品或上传发布销售吧！</p>
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
