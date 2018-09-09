import React from 'react';
import { connect } from 'dva';
import { Steps } from 'antd';
import { Radio } from 'antd';
import { Cascader } from 'antd';
import { Button } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';


import styles from './CreateDesigner.less';

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

class CreateDesigner extends React.Component {
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
      <div className={styles.createDesigner} >
        {/* 店铺申请进度 */}
        <div className={styles.sAudit}>
          <div className={styles.top}>
            <div className={styles.tit}>创建设计师账号</div>
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
            <div className={styles.left}>你的艺名</div>
            <div className={styles.right}><input type="text" placeholder="请输入您的艺名" /></div>
          </div>

          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}  ${styles.alignSelf}`} style={{ paddingTop: 20 }}>上传你的头像</div>
            <div className={`${styles.right} ${styles.logo}`} >
              <div> <img className={styles.logoImg} src="" alt="" /> </div>
              {/* <p>请上传格式为JPG或png格式的图片，大小1Mb以内</p> */}
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.left}>你的设计领域</div>
            <div className={styles.right}><input type="text" placeholder="请输入您的设计领域" /></div>
          </div>

          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`}>你是否拥有个人品牌</div>
            <div className={styles.right}>
              <RadioGroup onChange={this.changeSex}>
                <Radio value={1}>还没有</Radio>
                <Radio value={2}>有个人品牌</Radio>
              </RadioGroup>
              <Input style={{ width: 234 }} placeholder="请输入品牌名称" />
            </div>
          </div>

          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot}`}>你常用的珠宝设计方式是</div>
            <div className={styles.right}>
              <RadioGroup onChange={this.changeSex}>
                <Radio value={1}>手绘平面稿</Radio>
                <Radio value={2}>3D建模软件</Radio>
                <Radio value={3}>其它方式</Radio>
              </RadioGroup>
              <Input style={{ width: 234 }} placeholder="请输入设计方式" />
            </div>
          </div>

          <div className={styles.col}>
            <div className={`${styles.left} ${styles.dot} ${styles.alignSelf}`} style={{ paddingTop: 30 }} >个人介绍/品牌介绍：</div>
            <div className={`${styles.right} ${styles.textArea}`}>
              <div className={styles.text}>
                <textarea placeholder="请输入介绍内容" name="" id="" cols="30" rows="10" />
              </div>
              <p>(0/200字节）</p>
            </div>
          </div>

        </div>

        <div className={`${styles.sAudit} ${styles.shopData}`} >
          <div className={styles.top}>
            <div className={styles.tit}>证书与作品</div>
          </div>

          <div className={styles.imgCol}>
            <div className={styles.imgTop}>毕业证书（可选）
                <span className={styles.intro}>可选择内存10M以内的png，jpg等格式文件上传</span>
            </div>
            <div className={styles.imgWrap}>
              <div className={styles.imgItem}>
                <img src="" alt="" />
                <p>添加毕业证书正面</p>
              </div>
              <div className={styles.imgItem}>
                <img src="" alt="" />
                <p>添加毕业证书反面</p>
              </div>
            </div>
          </div>

          <div className={styles.imgCol}>
            <div className={styles.imgTop}>获奖证书（可选）
                <span className={styles.intro}>最多可上传六张相关的获奖证书</span>
            </div>
            <div className={styles.imgWrap}>
              <div className={styles.imgItem}>
                <img src="" alt="" />
                <p />
              </div>
              <div className={styles.imgItem}>
                <img src="" alt="" />
                <p />
              </div>
            </div>
          </div>

          <div className={styles.imgCol}>
            <div className={styles.imgTop}>作品（可选）
                <span className={styles.intro}>可选择内存20M以内的PDF，png，jpg等格式文件上传</span>
            </div>
            <div className={styles.imgWrap}>
              <div className={styles.imgItem}>
                <img src="" alt="" />
                <p />
              </div>
              <div className={styles.imgItem}>
                <img src="" alt="" />
                <p />
              </div>
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

CreateDesigner.propTypes = {

};

export default CreateDesigner;
