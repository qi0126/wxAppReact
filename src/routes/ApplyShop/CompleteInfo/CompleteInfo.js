import React from 'react';
import { connect } from 'dva';
import { Steps } from 'antd';
import { Radio } from 'antd';
import { Cascader } from 'antd';
import { Button } from 'antd';
import { Select } from 'antd';

import styles from './CompleteInfo.less';

const Step = Steps.Step;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const CompleteInfo = ({ dispatch, applyShopComplete }) => {
  const comleteInfo = applyShopComplete;
  const changeSex = (e) => {
    console.log('radio checked', e.target.value);
    dispatch({
      type: 'applyShopComplete/changeSex',
      payload: e.target.value,
    });
  };

  const cityOptions = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }];


  const changeJob = (value) => {
    console.log(`selected ${value}`);
  };

  const changeCity = (value) => {
    console.log(value);
  };

  const changeShop = (e) => {
    console.log(e.target.value);
    dispatch({
      type: 'applyShopComplete/changeShop',
      payload: e.target.value,
    });
  };


  return (
    <div className={styles.comleteInfo} >
      {/* 店铺申请进度 */}
      <div className={styles.sAudit}>
        <div className={styles.top}>
          <div className={styles.tit}>店铺申请进度</div>
        </div>
        <div >
          <Steps current={3}>
            <Step title="注册账号" />
            <Step title="完善信息" description="进行中..." />
            <Step title="店铺资料" />
            <Step title="平台审核" />
          </Steps>
        </div>
      </div>

      <div style={{ height: 10, weight: 10, background: '#f8f8f8' }} />

      {/* 完善信息 */}
      <div className={`${styles.sAudit} ${styles.completeInfo}`} >
        <div className={styles.top}>
          <div className={`${styles.tit}`}>完善信息</div>
          <div className={styles.right}>请尽快完善您的个人信息，“<span>*</span>”为必填项</div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.left} ${styles.dot}`}>姓名：</div>
          <div className={styles.right}><input type="text" placeholder="请输入您的姓名" /></div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.left} ${styles.dot}`}>性别：</div>
          <div className={styles.right}>
            <RadioGroup onChange={changeSex}>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </RadioGroup>
          </div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.left} ${styles.dot}`}>您所在的国家及地区：</div>
          <div className={styles.right}> <Cascader options={cityOptions} onChange={changeCity} placeholder="请选择省市区" /></div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.left} ${styles.dot}`}>详细地址：</div>
          <div className={styles.right}><input type="text" placeholder="请输入详细地址" /></div>
        </div>
        <div className={styles.col}>
          <div className={styles.left}>您目前的职业：</div>
          <div className={styles.right}>
            <Select defaultValue="0" style={{ width: 120 }} onChange={changeJob}>
              <Option value="0">请选择</Option>
              <Option value="1">珠宝设计师</Option>
              <Option value="2">珠宝商</Option>
              <Option value="3" >网红</Option>
              <Option value="4">博主</Option>
              <Option value="5">其它职业</Option>
            </Select>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.left}>实体珠宝门店：{comleteInfo.params.shop}</div>
          <div className={styles.right}>
            <RadioGroup onChange={changeShop} >
              <Radio value={1}>暂时没有</Radio>
              <Radio value={2}>有</Radio>
            </RadioGroup>
            {comleteInfo.params.shop === 1 ? null : <input className={styles.shop} type="text" />}
          </div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.left} ${styles.dot}`}>固定电话：</div>
          <div className={styles.right}><input type="text" placeholder="请输入您的固定电话" /></div>
        </div>
        <div className={styles.col}>
          <div className={styles.left}>邮箱：</div>
          <div className={styles.right}><input type="text" placeholder="请输入您常用的邮箱" /></div>
        </div>
        <div className={styles.imgCol}>
          <div className={styles.imgTop}>身份证</div>
          <div className={styles.imgWrap}>
            <div className={styles.imgItem}>
              <img src="" alt="" />
              <p>添加身份证正面照</p>
            </div>
            <div className={styles.imgItem}>
              <img src="" alt="" />
              <p>添加身份证反面照</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.btn}>
          <p>取消</p>
          <Button type="primary" size="large">下一步</Button>
        </div>
      </div>
    </div>
  );
};

CompleteInfo.propTypes = {

};

export default connect(({ applyShopComplete }) => ({
  applyShopComplete,
}))(CompleteInfo);
