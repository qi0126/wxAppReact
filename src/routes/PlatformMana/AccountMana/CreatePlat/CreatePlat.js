import React from 'react';
import { connect } from 'dva';
import { Steps } from 'antd';
import { Radio } from 'antd';
import { Cascader } from 'antd';
import { Button } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';


import styles from './CreatePlat.less';

const Step = Steps.Step;
const RadioGroup = Radio.Group;
const Option = Select.Option;

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

class CreatePlat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobCustomShow: 1,
      createdLoading: false,
      params: {
        sex: 1,
        shop: 1,
      },
    };
  }

  changeShop(e) {
    this.state.params.shop = e.target.value;
    this.setState({
      params: this.state.params,
    });
  }

  changeSex(e) {
    this.state.params.sex = e.target.value;
    this.setState({
      params: this.state.params,
    });
  }

  changeJob(e) {

  }

  changeCity(e) {

  }

  enterLoading = () => {
    this.setState({ createdLoading: true });
  }

  render() {
    return (
      <div className={styles.createPlat} >
        {/* 店铺申请进度 */}
        <div className={styles.sAudit}>
          <div className={styles.top}>
            <div className={styles.tit}>创建工厂账号</div>
          </div>
          <div className={styles.inWrap}>
            <div className={`${styles.left} ${styles.dot}`}>账户名:</div>
            <div className={styles.right}><Input style={{ width: 234 }} placeholder="请输入账户名称" /></div>
          </div>
          <div className={styles.inWrap}>
            <div className={`${styles.left} ${styles.dot}`}>密码：</div>
            <div className={styles.right}><Input style={{ width: 234 }} placeholder="请输入密码" /></div>
          </div>
        </div>

        <div style={{ height: 10, weight: 10, background: '#f8f8f8' }} />

        {/* 完善信息 */}
        <div className={`${styles.sAudit} ${styles.completeInfo}`} >
          <div className={styles.top}>
            <div className={`${styles.tit}`} style={{ fontSize: 16 }}>个人信息</div>
            <div className={styles.right} style={{ fontSize: 14 }}>请尽快完善您的个人信息，“<span>*</span>”为必填项</div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`}>姓名：</div>
            <div className={styles.right}><input type="text" placeholder="请输入您的姓名" /></div>
          </div>

          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`}>性别：</div>
            <div className={styles.right}>
              <RadioGroup onChange={this.changeSex}>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`}>公司名称：</div>
            <div className={styles.right}><input type="text" placeholder="请输入公司名称" /></div>
          </div>

          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`}>您所在的国家及地区：</div>
            <div className={styles.right}> <Cascader options={cityOptions} onChange={this.changeCity} placeholder="请选择省市区" /></div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`}>公司详细地址：</div>
            <div className={styles.right}><input type="text" placeholder="请输入详细地址" /></div>
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

          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`}>性别：</div>
            <div className={styles.right}>
              <RadioGroup onChange={this.changeSex}>
                <Radio value={1}>K金</Radio>
                <Radio value={2}>素金</Radio>
                <Radio value={2}>镶嵌</Radio>
                <Radio value={2}>其他</Radio>
              </RadioGroup>
              <Input style={{ width: 234 }} placeholder="请输入账户名称" />
            </div>
          </div>
        </div>


        <div className={styles.bottom}>
          <div className={styles.btn}>
            <p>取消</p>
            <Button type="primary" size="large" loading={this.state.createdLoading} onClick={this.enterLoading}>完成创建</Button>
          </div>
        </div>
      </div>
    );
  }
}

CreatePlat.propTypes = {

};

export default CreatePlat;
