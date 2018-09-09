import React from 'react';
import { Button, Col, Form, Input, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { cityJson } from '../../../api/tool.js';// 世界国家数据

import { connect } from 'dva';
// import Axios from '../../../utils/request';// axios请求
import styles from './DesignerCity.less';

const Option = Select.Option;


class DesignerCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goldList: [{ name: '中国', price: 338 }, { name: '法国', price: 100 }, { name: '美国', price: 265 }],
      addGoldShow: false, // 添加新材质状态默认false
      editGoldShow: false, // 编辑全部材质状态默认false
      newCityData: [],
    };
  }
  componentDidMount() {
    const self = this;
    // console.log()
    this.setState({
      newCityData: cityJson,
    });

    // 查询金价列表
    // Axios.ajax_get('/goldManage/selectGoldlist')
    // .then(function(res){
    //   // console.log(res.data.data)
    //   this.setState({
    //     goldList:res.data.data
    //   })
    //   console.log(this.state.goldList)
    // }.bind(this))
    // .catch(function(error){
    //     // 处理请求出错的情况
    // });
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
    if (item !== 'new') {
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
  editGold() {
    this.setState({
      addGoldShow: false,
      editGoldShow: !this.state.editGoldShow,
    });
  }
  // 保存当前材质结果
  saveGold() {
    console.log(this.state.goldList);
    this.setState({
      addGoldShow: false, // 添加新材质状态默认false
      editGoldShow: false, // 编辑全部材质状态默认false
    });
  }
  // 下拉选择框
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  render() {
    const self = this;
    return (
      <div className={styles.shopApply} >
        <div className={styles.sAudit}>
          <div className={styles.top}>
            <div className={styles.tit} style={{ height: 40 }}>
              <Col span={12}>
                设计师国家
              </Col>
              <Col span={12} className={styles.topRight}>
                <span onClick={() => self.addGold()}>
                  {this.state.addGoldShow ? '关闭添加' : '添加开放的设计师国家'}
                </span>
              </Col>
            </div>
          </div>
          {this.state.goldList.map((number, ind) =>
            <div className={styles.items}>

              <Col span={10} className={styles.txtTwo}>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  defaultValue={self.state.goldList[ind].name}
                  placeholder="请选择一个国家"
                  optionFilterProp="children"
                  onChange={this.handleChange}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  {this.state.newCityData.map(data => (
                    <Option value={data.cityName}>{data.cityName}</Option>
                  ))}
                </Select>
              </Col>
              <Col span={7}>
                <Col span={8}>
                  <div className={styles.cityImgDiv} >
                    <img src="../images/cityDemo01.png" />
                  </div>
                </Col>
                <Col span={16}>aaaaa</Col>
              </Col>
              <Col span={7} className={styles.txtOneRight} onClick={() => self.delGold(ind)}>删除</Col>
            </div>,
            )}
          {
            this.state.addGoldShow
                ?
                  <div className={styles.items}>
                    <Col span={10} className={styles.txtTwo}>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="请选择一个国家"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      >
                        {this.state.newCityData.map(data => (
                          <Option value={data.cityName}>{data.cityName}</Option>
                        ))}
                      </Select>
                    </Col>
                    <Col span={7}>
                      <Col span={8}>
                        <div className={styles.cityImgDiv} >
                          <img src="../images/cityDemo01.png" />
                        </div>
                      </Col>
                      <Col span={16}>aaaaa</Col>
                    </Col>
                    <Col span={7} className={styles.txtOneRight} onClick={() => self.delGold('new')}>删除</Col>
                  </div>
                :
                null
            }


          <div className={styles.bottom}>
            <div className={styles.txtOneRight}>
              <span style={{ marginRight: 20 }}>取消</span>
              <Button type="primary" onClick={() => self.saveGold()}>保存</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const DesignerCityForm = Form.create()(DesignerCity);
export default connect(() => ({}))(DesignerCityForm);
