import React from 'react';
import { connect } from 'dva';
import { Steps } from 'antd';
import { Radio } from 'antd';
import { Cascader } from 'antd';
import { Button } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';


import styles from './CreateShop.less';

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

class CreateShop extends React.Component {
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
      <div className={styles.createShop} >
        {/* 店铺申请进度 */}
        <div className={styles.sAudit}>
          <div className={styles.top}>
            <div className={styles.tit}>创建店铺帐号</div>
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
            <div className={`${styles.left} ${styles.dot}`}>您所在的国家及地区：</div>
            <div className={styles.right}> <Cascader options={cityOptions} onChange={this.changeCity} placeholder="请选择省市区" /></div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`}>详细地址：</div>
            <div className={styles.right}><input type="text" placeholder="请输入详细地址" /></div>
          </div>
          <div className={styles.col}>
            <div className={styles.left}>您目前的职业：</div>
            <div className={styles.right}>
              <Select defaultValue="0" style={{ width: 120 }} onChange={this.changeJob}>
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
            <div className={styles.left}>实体珠宝门店：{this.state.params.shop}</div>
            <div className={styles.right}>
              <RadioGroup onChange={this.changeShop} >
                <Radio value={1}>暂时没有</Radio>
                <Radio value={2}>有</Radio>
              </RadioGroup>
              {this.state.params.shop === 1 ? null : <input className={styles.shop} type="text" />}
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

        <div className={`${styles.sAudit} ${styles.shopData}`} >
          <div className={styles.top}>
            <div className={styles.tit}>完善信息</div>
            <div className={styles.right}>您所命名的店铺名称及logo只做临时申请，待平台审核后方可生效</div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`} >店铺名称：</div>
            <div className={styles.right}><input type="text" placeholder="请输入您的姓名" /></div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}  ${styles.alignSelf}`} style={{ paddingTop: 20 }}>店铺logo：</div>
            <div className={`${styles.right} ${styles.logo}`} >
              <div> <img className={styles.logoImg} src="" alt="" /> </div>
              <p>请上传格式为JPG或png格式的图片，大小1Mb以内</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot} ${styles.alignSelf}`} style={{ paddingTop: 30 }} >店铺介绍：</div>
            <div className={`${styles.right} ${styles.textArea}`}>
              <div className={styles.text}>
                <textarea placeholder="请输入店铺介绍信息......" name="" id="" cols="30" rows="10" />
              </div>
              <p>(0/300字节）</p>
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

CreateShop.propTypes = {

};

export default CreateShop;
