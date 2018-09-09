import React from 'react';
import { Button, Col, Form, Input } from 'antd';
import { connect } from 'dva';
import Axios from '../../../utils/request';// axios请求
import styles from './MaterManage.less';
import app from 'app';

const FormItem = Form.Item;


class MaterManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goldList: [],
      addGoldShow: false, // 添加新材质状态默认false
      editGoldShow: false, // 编辑全部材质状态默认false
    };
  }
  componentDidMount() {

    app.$api.selectGoldlist().then((res) => {
      console.log(res);
    });
    // 查询金价列表
    Axios.ajax_get('/goldManage/selectGoldlist')
    .then((res) => {
      // console.log(res.data.data)
      this.setState({
        goldList: res.data.data,
      });
      console.log(this.state.goldList);
    })
    .catch((error) => {
        // 处理请求出错的情况
    });
  }
  // 添加材质事件
  addGold() {
    this.setState({
      addGoldShow: !this.state.addGoldShow,
      editGoldShow: false,
    });
  }
  // 删除当前材质
  delGold(item) {
    if (item != 'new') {
      const tempGoldList = this.state.goldList;
      tempGoldList.splice(item, 1);
      this.setState({
        goldList: tempGoldList,
        addGoldShow: false,
        editGoldShow: false,
      });
    } else {
      this.addGold();
    }
  }
  // 编辑所有材质
  editGold(elem) {
    console.log(elem);
    this.setState({
      addGoldShow: false,
    });
  }
  // 保存当前材质结果
  saveGold(thiselem) {
    // console.log(thiselem.state.goldList);
    // console.log(thiselem.state.goldList.length);
    // const maxI = thiselem.state.goldList.length - 1;
    // console.log(thiselem.state.goldList[`${maxI}`]);
    console.log(thiselem.state);
    console.log(thiselem.state.addGoldShow);
    if (thiselem.state.addGoldShow) {
      console.log('新增状态');
    }
    // this.setState({
    //   addGoldShow: false, // 添加新材质状态默认false
    //   editGoldShow: false, // 编辑全部材质状态默认false
    // });
  }
  render() {
    const self = this;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.shopApply} >
        <div className={styles.sAudit}>
          <Form onSubmit={() => self.saveGold(self)} className="login-form">
            <div className={styles.top}>
              <div className={styles.tit} style={{ height: 40 }}>
                <Col span={12}>
                材质管理 <span style={{ fontSize: '14px' }}>（ ¥/g ）</span>
                </Col>
                <Col span={12} className={styles.topRight}>
                  <span onClick={() => self.addGold()}>
                    {this.state.addGoldShow ? '关闭添加' : '添加材质'}
                  </span>
                </Col>
              </div>
            </div>

            {this.state.goldList.map((number, ind) =>
              <div className={styles.items}>
                <Col span={10} className={styles.txtTwo}>
                  {
                      this.state.editGoldShow ?
                        <Input style={{ width: 145 }} placeholder="请输入材质名称" defaultValue={number.textureName} />
                      :
                      number.textureName
                    }
                </Col>
                <Col span={7}>
                  <span className={styles.txtTwo}>
                    {
                        this.state.editGoldShow ?
                          <Input style={{ width: 145 }} placeholder="请输入材质价格" defaultValue={number.goldPrice} />
                        :
                        number.goldPrice
                      }
                  </span>
                    元/g
                  </Col>
                <Col span={7} className={styles.txtOneRight}>
                  <span onClick={() => self.editGold(ind)}>编辑</span>
                  <span onClick={() => self.delGold(ind)}>删除</span>
                </Col>
              </div>,
              )}
            {
              this.state.addGoldShow
                  ?
                    <div className={styles.items}>
                      <Col span={10} className={styles.txtTwo}>
                        <Input style={{ width: 145 }} placeholder="请输入材质名称" />
                      </Col>
                      <Col span={14}>
                        <span className={styles.txtTwo}>
                          <Input style={{ width: 145 }} placeholder="请输入材质价格" />
                        </span>
                      元/g
                      </Col>
                    </div>
                  :
                  null
              }


            <div className={styles.bottom}>
              {
              this.state.addGoldShow
                  ?
                    <div className={styles.txtOneRight}>
                      <span style={{ marginRight: 20 }}>取消</span>
                      <Button type="primary" htmlType="submit">保存</Button>
                    </div> : null}
            </div>
          </Form>

        </div>
      </div>
    );
  }

}

const MaterManageForm = Form.create()(MaterManage);
export default connect(() => ({}))(MaterManageForm);
