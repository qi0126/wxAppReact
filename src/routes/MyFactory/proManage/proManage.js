import React from 'react';
import { connect } from 'dva';
import { router } from 'react-router';
import PropTypes from 'prop-types';
import Axios from '../../../utils/request';// axios请求
import styles from './proManage.less';

import { Radio, Slider, Button, Row, Col, Card, Modal, Table, Input, Select, Checkbox, message, Form, InputNumber } from 'antd';

import Swiper from 'react-id-swiper';

const { TextArea } = Input;
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;// 表格属性
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const tableState = {
  bordered: true,
  defaultExpandAllRows: true,
  expandRowByClick: false,
  pagination: false,
};
const tableData = [
  {
    key: 'PT950',
    name: '3.45g',
    age: '￥2366.00',
    address: '￥3100.00~￥3888.00',
    priceOne: '￥2366.00',
  },
  {
    key: '18K金',
    name: '3.45g',
    age: '￥2366.00',
    address: '￥3100.00~￥3888.00',
    priceOne: '￥2366.00',
  },
];
const swiperParams = {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const proListData = [{}];
let proSelectEdList = [];

class proManage extends React.Component {

  constructor(props) {
    super(props);
    // 初始化参数
    this.state = {
      categoryList: [], // 产品分类接口数据
      categoryValue: '', // 产品分类选中信息
      crowdList: [], // 适合人群接口数据
      crowdValue: '', // 适合人群选中信息
      proDataList: [], // 产品接口数据
      proViewModalTF: false, // 产品详细弹窗
      proModifyModalTF: false, // 修改产品弹窗
      proViewId: '', // 弹窗显示产品详细的ID
      proViewDetail: {}, // 弹窗显示产品详细的资料
      proImgBigUrl: '', // 弹窗显示产品详细第一张产品图片
      proImgList: [], // 弹窗显示产品详细所有产品图片
      designsListOne: [], // 款式数组
      // proSelectEdList: [], // 产品选择数组
      checkAll: false, // 产品全选/反选
      indeterminate: true, // 产品全选/反选
      addGroundModalTF: false, // 发布上架弹窗
      cancelGroundModalTF: false, // 取消上架弹窗
      // 修改框架
      proSizeList: [{ value: '' }], // 产品款式尺寸
      imgDisplayList: [], // 图片示意图
      materList: [], // 材质列表
    };
    // 定义全局变量方法
  }
  componentDidMount() {
    // 查询产品数据信息
    Axios.ajax_get('/product/selectFactoryProductInfo')
    .then((res) => {
      if (res.data.code == '200') {
        this.setState({
          proDataList: res.data.data,
        });
        // console.log(this.state.proDataList)
      } else {
        message.error(res.data.msg);
      }
    })
    .catch((error) => {
      message.error(error);
    });
    // 查询分类数据信息
    Axios.ajax_get('/CommonManage/selectCategoryNumber')
    .then((res) => {
      if (res.data.code == '200') {
        const tempData = res.data.data;
        tempData.unshift({ id: '', commonName: '全部' });
        this.setState({
          categoryList: res.data.data,
        });
      } else {
        message.error(res.data.msg);
      }
    })
    .catch((error) => {
      message.error(error);
    });
        // 查询适合人群数据信息
    Axios.ajax_get('/goldManage/selectGoldlist')
        .then(
          (res) => {
            if (res.data.code == 200) {
              this.setState({
                materList: res.data.data,
              });
            } else {
              message.error(res.data.data);
            }
          },
        )
        .catch((error) => {
          message.error(error);
        });
    // 查询适合人群数据信息
    Axios.ajax_get('/CommonManage/selectCrowdNumber')
    .then((res) => {
      if (res.data.code == '200') {
        this.setState({
          crowdList: res.data.data,
        });
      } else {
        message.error(res.data.data);
      }
    })
    .catch((error) => {
      message.error(error);
    });
  }

  proSelectChange(checkedValues) {
    console.log('checked = ', checkedValues);
    proSelectEdList = checkedValues;
    console.log(proSelectEdList);

  }
  // 全选/反选
  onCheckAllChange = (e) => {
    const allSelectList = [];
    this.state.proDataList.forEach((ielem) => {
      allSelectList.push(ielem.productId);
    });
    this.setState({
      proSelectEdList: e.target.checked ? allSelectList : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
  // 打开产品详细资料+弹窗
  showModal(elem) {
    const self = this;
    const params = { productId: elem };
    Axios.ajax_post_params('/product/findProductByProductId', params)
    .then((res) => {
      if (res.data.code == '200') {
        const tempList = res.data.data.designs[0].designValue;
        this.setState({
          proViewDetail: res.data.data,
          proImgBigUrl: res.data.data.images[0].imageUrl,
          designsListOne: tempList.split(','),
          proImgList: res.data.data.images,
        });
        console.log(this.state.proImgList);
        this.setState({
          proViewModalTF: true,
          proViewId: elem,
        });
      } else {
        message.error(res.data.msg);
      }
    })
    .catch((error) => {
      message.error(error);
    });

  }
  // 打开‘发布上架’按钮
  addGroundModal() {
    this.setState({
      addGroundModalTF: true,
    });
  }
  // 打开‘上传产品’按钮
  uploadPro(thiselem) {
    thiselem.context.router.push('/MyFactory/uploadPro');
  }
  // 打开‘取消上架’按钮
  cancelGroundModal() {
    this.setState({
      cancelGroundModalTF: true,
    });
  }

  handleOk() {
    // dispatch({
    //   type: 'myfamProManage/handleOk',
    //   payload: true,
    // });
    // setTimeout(() => {
    //   dispatch({
    //     type: 'myfamProManage/handleOk',
    //     payload: false,
    //   });
    // }, 3000);
  }

  handleCancel(self) {
    self.setState({
      proViewModalTF: false,
      addGroundModalTF: false,
      cancelGroundModalTF: false,
    });
  }
  // 修改产品弹出框
  modifyPro(thiselem) {
    const tempDesignValue = thiselem.state.proViewDetail.designs[0].designValue.split(',');
    const tempProSizeList = [];
    for (let i = 0; i < tempDesignValue.length; i++) {
      tempProSizeList.push({ value: tempDesignValue[i] });
    }
    thiselem.setState({
      proViewModalTF: false,
      proModifyModalTF: true,
      proSizeList: tempProSizeList,
    });

    thiselem.state.imgDisplayList = thiselem.state.proViewDetail.images;

  }
  // 修改产品数据调接口
  modifySave(self) {
    const params = new FormData();
    params.append('productStr', JSON.stringify(self.state.proViewDetail));
          // 提交新产品参数
    Axios.ajax_post_formdata('/product/updateFactoryProduct', params)
      .then(
        (res) => {
          if (res.data.code == 200) {
            self.setState({
              proModifyModalTF: false,
            });
          } else {
            message.error(res.data.msg);
          }
        },
      );

  }
  modifyCancel(self) {
    self.setState({
      proModifyModalTF: false,
    });
  }
  // 添加尺寸
  addProSize(thiselem) {
    const tempProSizeList = this.state.proSizeList;
    tempProSizeList.push({ value: '0' });
    thiselem.setState({
      proSizeList: tempProSizeList,
    });
  }
  // 添加材质
  addProMater(self) {
    console.log(self);
    console.log(self.state.proViewDetail.textures);
    self.state.proViewDetail.textures.push(
      { textureId: '',
        texturePrice: '0-0',
        textureWeight: '0-0' },
    );
    self.setState({
      proViewDetail: self.state.proViewDetail,
    });
    console.log(self.state);
  }
  newProSubmit = (e) => {
    const self = this;

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // if (!err) {
      //   console.log('Received values of form: ', values);
      // }
      const proSizeList = [];// 款式尺寸数组
      const proMaterListTwo = [];// 产品材质/重量/价格遍历数组
      for (const i in values) {
        // 款式尺寸遍历
        if (i.indexOf('size_') >= 0) {
          proSizeList.push(values[i]);
        }
        // 产品材质/重量/价格遍历
        if (i.indexOf('proMaxWeight_') >= 0) {
          const indexNum = i.split('_')[1];
          const proMinWeight = values[`proMinWeight_${indexNum}`];
          const proMaxWeight = values[`proMinWeight_${indexNum}`];
          const proMinPrice = values[`proMinPrice_${indexNum}`];
          const proMaxPrice = values[`proMaxPrice_${indexNum}`];
          const materId = values[`materId_${indexNum}`];
          proMaterListTwo.push({ textureId: materId, textureName: '', textureWeight: `${proMinWeight}-${proMaxPrice}`, texturePrice: `${proMinPrice}-${proMaxPrice}` });
        }
      }
      self.state.productStr.categoryId = values.categoryId; // 分类ID
      self.state.productStr.crowdId = values.crowdId; // 适合人群ID
      self.state.productStr.productName = values.productName; // 款式名称
      self.state.productStr.productDescription = values.productDescription; // 宝石描述

      self.state.productStr.designs[0].designValue = proSizeList.join(','); // 款式尺寸
      self.state.productStr.stonePrice = values.stonePrice;// 宝石价格
      self.state.productStr.wagePrice = values.wagePrice;// 生产工费
      self.state.productStr.imageIdFroms = this.state.imgDisplayList;// 生产工费
      self.state.productStr.textures = proMaterListTwo;// 产品材质/重量/价格遍历數組
      // console.log(self.state.productStr);
      const params = new FormData();
      params.append('productStr', JSON.stringify(self.state.productStr));
      // 提交新产品参数
      Axios.ajax_post_formdata('/product/addProductNumber', params)
      .then(
        (res) => {
          if (res.data.code == '200') {
            this.context.router.push('/MyFactory/proManage');
          } else {
            message.error(res.data.msg);
          }
        },
      )
      .catch((error) => {
        message.error(error);
      });
    });
  };
  newProSubmit = (e) => {
    const self = this;

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // if (!err) {
      //   console.log('Received values of form: ', values);
      // }
      const proSizeList = [];// 款式尺寸数组
      const proMaterListTwo = [];// 产品材质/重量/价格遍历数组
      for (const i in values) {
        // 款式尺寸遍历
        if (i.indexOf('size_') >= 0) {
          proSizeList.push(values[i]);
        }
        // 产品材质/重量/价格遍历
        if (i.indexOf('proMaxWeight_') >= 0) {
          const indexNum = i.split('_')[1];
          const proMinWeight = values[`proMinWeight_${indexNum}`];
          const proMaxWeight = values[`proMinWeight_${indexNum}`];
          const proMinPrice = values[`proMinPrice_${indexNum}`];
          const proMaxPrice = values[`proMaxPrice_${indexNum}`];
          const materId = values[`materId_${indexNum}`];
          proMaterListTwo.push({ textureId: materId, textureName: '', textureWeight: `${proMinWeight}-${proMaxPrice}`, texturePrice: `${proMinPrice}-${proMaxPrice}` });
        }
      }
      self.state.productStr.categoryId = values.categoryId; // 分类ID
      self.state.productStr.crowdId = values.crowdId; // 适合人群ID
      self.state.productStr.productName = values.productName; // 款式名称
      self.state.productStr.productDescription = values.productDescription; // 宝石描述

      self.state.productStr.designs[0].designValue = proSizeList.join(','); // 款式尺寸
      self.state.productStr.stonePrice = values.stonePrice;// 宝石价格
      self.state.productStr.wagePrice = values.wagePrice;// 生产工费
      self.state.productStr.imageIdFroms = this.state.imgDisplayList;// 生产工费
      self.state.productStr.textures = proMaterListTwo;// 产品材质/重量/价格遍历數組
      // console.log(self.state.productStr);
      const params = new FormData();
      params.append('productStr', JSON.stringify(self.state.productStr));
      // 提交新产品参数
      Axios.ajax_post_formdata('/product/addProductNumber', params)
      .then(
        (res) => {
          if (res.data.code == '200') {
            this.context.router.push('/MyFactory/proManage');
          } else {
            message.error(res.data.msg);
          }
        },
      )
      .catch((error) => {
        message.error(error);
      });
    });
  };

  render() {
    const self = this;
    const { getFieldDecorator } = self.props.form;
    const formItemLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 18 },
    };
    const formItemTwo = {
      labelCol: { span: 2 },
      wrapperCol: { span: 18 },
    };
    return (
      <div className={styles.proManage}>
        <div className={styles.tit}>产品管理
          <span className={styles.titSubName}>
            <span className={styles.marginLeft30}>
              类别：
              <Select defaultValue="全部" style={{ width: 120 }}>
                {this.state.categoryList.map(data =>
                  <Option value={data.id}>{data.commonName}</Option>,
                )}
              </Select>
            </span>
            <span className={styles.marginLeft30}>
              状态：
              <Select defaultValue="全部" style={{ width: 120 }}>
                <Option value="全部">全部</Option>
                <Option value="已上架">已上架</Option>
                <Option value="未上架">未上架</Option>
              </Select>
            </span>
            <span>
              <Checkbox>审核中</Checkbox>
            </span>
          </span>
        </div>
        <div className={styles.hr} />
        <div>
          <Row>
            <Col span={12}>
              <Button type="primary" onClick={() => self.uploadPro(this)}>上传产品</Button>
            </Col>
            <Col span={12} className={styles.textRight}>
              <Checkbox
                indeterminate={this.state.indeterminate}
                onChange={this.onCheckAllChange}
                checked={this.state.checkAll}
              >全选</Checkbox>
              <Button type="primary" onClick={() => self.cancelGroundModal()} className={styles.marginLeft30}>取消上架</Button>
              <Button type="primary" onClick={() => self.addGroundModal()} className={styles.marginLeft30}>发布上架</Button>
              <Modal
                visible={this.state.addGroundModalTF}
                title="发布上架"
                onOk={this.handleOk}
                onCancel={() => this.handleCancel(self)}
                width="1100"
                footer={[
                  <Button key="back" onClick={() => this.handleCancel(self)}>取消</Button>,
                  <Button key="submit" type="primary" onClick={this.handleOk}>
                    审核通过
                  </Button>,
                ]}
              >
                <Row>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                </Row>
              </Modal>
              <Modal
                visible={this.state.cancelGroundModalTF}
                title="取消上架"
                onOk={this.handleOk}
                onCancel={() => this.handleCancel(self)}
                width="1100"
                footer={[
                  <Button key="back" onClick={() => this.handleCancel(self)}>取消</Button>,
                  <Button key="submit" type="primary" onClick={this.handleOk}>
                    审核通过
                  </Button>,
                ]}
              >
                <Row>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                </Row>
              </Modal>
            </Col>
          </Row>
        </div>
        <div className={styles.hr} />
        <div>
          <div className="gutter-example">
            <Row gutter={16}>
              <Checkbox.Group style={{ width: '100%' }} onChange={self.proSelectChange}>
                {this.state.proDataList.map((ielem) => {
                  return (
                    <Col className="gutter-row" span={6}>
                      <div className="gutter-box">
                        <div className={styles.pro} >
                          <div>
                            <div className={styles.imgTop} > <Checkbox value={ielem.productId} /> </div>
                            <img src={Axios.imgURL + ielem.productImageUrl} onClick={() => self.showModal(ielem.productId)} />
                          </div>
                          <div className={styles.proDisplay} onClick={() => self.showModal(ielem.productId)}>
                            <p className={styles.proName}>{ielem.productName}</p>
                            <p className={styles.proPrice}>批发价：￥{ielem.combinationPrice}</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Checkbox.Group>
            </Row>
            <Modal
              visible={this.state.proViewModalTF}
              onCancel={() => this.handleCancel(self)}
              width="1100"
              footer={[
                <div className={styles.modalFooter}>
                  <Button key="submit" type="primary" onClick={this.handleOk}>
                      添加到店铺
                    </Button>
                </div>,
              ]}
              >
              <div className={styles.modalDiv}>
                <Row>
                  <Col span={12}>
                      产品信息
                    </Col>
                  <Col span={12} className={styles.textRight}>
                    <Button type="primary" onClick={() => this.modifyPro(self)}>
                      修改产品信息
                    </Button>
                  </Col>
                  <Col span={12}>
                    <img src={Axios.imgURL + this.state.proImgBigUrl} className={styles.mainImg} />
                  </Col>
                  <Col span={12}>
                    <div className={styles.titTxt}>
                        平面图
                      <div>
                        <Swiper {...swiperParams} className={styles.swiperDiv}>
                          {this.state.proImgList.map(data =>
                            <img src={Axios.imgURL + data.imageUrl} className={styles.imgSmall} />,
                            )}
                        </Swiper>
                      </div>
                    </div>
                    <div className={styles.titTxt}>
                        3D图
                        <div>
                          <Swiper {...swiperParams} className={styles.swiperDiv}>
                            <div className={styles.swiperSubDiv}>
                              <img src="./images/demo01.jpg" />
                            </div>
                          </Swiper>
                        </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className={styles.contant}>
                      <div className={styles.hr} />
                      <div className={styles.tabTwo}>
                        <Row>
                          <Col span={2} className={styles.leftTxt}>产品类别：</Col>
                          <Col span={21} className={styles.rightTxt}>{this.state.proViewDetail.categoryName}</Col>
                          <Col span={2} className={styles.leftTxt}>适合人群：</Col>
                          <Col span={21} className={styles.rightTxt}>{this.state.proViewDetail.crowdName}</Col>
                          <Col span={2} className={styles.leftTxt}>产品名称：</Col>
                          <Col span={22} className={styles.rightTxt}>{this.state.proViewDetail.productName}</Col>
                          <Col span={2} className={styles.leftTxt}>宝石描述：</Col>
                          <Col span={22} className={styles.rightTxt}>{this.state.proViewDetail.productDescription}{this.state.proViewDetail.designsListOne}</Col>
                          <Col span={2} className={styles.leftTxt}>款式尺寸:</Col>
                          <Col span={22} className={styles.rightTxt}>
                            <span className={styles.rightNumSpan}>
                              {this.state.designsListOne.map(data =>
                                <span className={styles.rightNumSpan}>{data}</span>,
                                )}
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className={styles.contant}>
                      <div className={styles.mainTxt}>
                          产品材质/重量/价格:
                        </div>
                      <div className={styles.tabOne}>
                        <Table dataSource={this.state.proViewDetail.textures} {...tableState}>
                          <Column
                            title="材质/重量/价格"
                            dataIndex="textureName"
                            key="textureName"
                              />
                          <Column
                            title="重量/g"
                            dataIndex="textureWeight"
                            key="textureWeight"
                            />
                          <Column
                            title="批发价/￥"
                            dataIndex="texturePrice"
                            key="texturePrice"
                            />
                        </Table>
                      </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className={styles.contant}>
                      <div className={styles.mainTxt}>
                          图文详情
                        </div>
                      <div className={styles.tempDiv} />
                    </div>
                  </Col>
                </Row>
              </div>
            </Modal>
            <Modal
              visible={this.state.proModifyModalTF}
              onCancel={() => this.modifyCancel(self)}
              width="1100"
              footer={[
                <div className={styles.modalFooter}>
                  <span>取消</span>
                  <Button htmlType="submit" type="primary" onClick={() => this.modifySave(self)}>
                    确定修改
                  </Button>
                </div>,
              ]}
              >
              <div className={styles.modalDiv}>
                <Form onSubmit={this.newProSubmit}>
                  <FormItem {...formItemLayout} label="产品类别" hasFeedback>
                    {getFieldDecorator('categoryId', {
                      initialValue: self.state.proViewDetail.categoryId,
                    })(
                      <Select placeholder="请输入产品类别" style={{ width: 480 }} showSearch>
                        {this.state.categoryList.map(data => (
                          <Option value={data.id}>{data.commonName}</Option>
                          ))}
                      </Select>,
                      )}
                  </FormItem>

                  <FormItem {...formItemLayout} label="适合人群">
                    {getFieldDecorator('crowdId', {
                      initialValue: self.state.proViewDetail.crowdId,
                    })(
                      <Select
                        showSearch
                        placeholder="请输入适合人群"
                        style={{ width: 480 }}
                        >
                        {self.state.crowdList.map((data, ind) => (
                          <Option value={data.id}>{data.commonName}</Option>
                          ))}
                      </Select>,
                      )}
                  </FormItem>

                  <FormItem {...formItemLayout} label="款式名称">
                    {getFieldDecorator('productName', {
                      initialValue: self.state.proViewDetail.productName,
                    })(
                      <Input style={{ width: 480 }} placeholder="请输入款式名称" />,
                    )}
                  </FormItem>
                  <FormItem {...formItemLayout} label="宝石描述">
                    {getFieldDecorator('productDescription', {
                      initialValue: self.state.proViewDetail.productDescription,
                    })(
                      <TextArea placeholder="宝石描述" />,
                       )}
                  </FormItem>
                  <FormItem {...formItemTwo} label="款式尺寸">
                    {self.state.proSizeList.map((data, ind) => (
                      <Col span={2} style={{ marginRight: 20 }}>
                        {getFieldDecorator(`size_${ind}`, {
                          initialValue: data.value,
                        })(
                          <Input placeholder="" />,
                          )}
                      </Col>
                      ))}
                    <Button type="primary" onClick={() => self.addProSize(self)}>
                        添加尺寸+
                      </Button>
                  </FormItem>

                  <div className={styles.hr} />
                  <div>
                    <div>
                      <Row className={styles.margin10}>
                        <Col span={9}>产品材质/重量/价格</Col>
                        <Col span={14} className={styles.textRight}>
                          <Col span={6} className={styles.textRight}>
                              宝石价格：
                            </Col>
                          <Col span={6} className={styles.textRight}>
                            {getFieldDecorator('stonePrice', {
                              initialValue: self.state.proViewDetail.stonePrice,
                            })(
                              <InputNumber
                                formatter={value =>
                                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                  }
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                className={styles.input140}
                                min={0}
                                />,
                              )}
                          </Col>
                          <Col span={6} className={styles.textRight}>
                              生产工费:
                            </Col>
                          <Col span={6} className={styles.textRight}>
                            {getFieldDecorator('wagePrice', {
                              initialValue: self.state.proViewDetail.combinationPrice,
                            })(
                              <InputNumber
                                formatter={value =>
                                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                  }
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                className={styles.input140}
                                min={0}
                                />,
                              )}
                          </Col>
                        </Col>
                      </Row>
                      <div>
                        <Table dataSource={self.state.proViewDetail.textures} {...tableState}>
                          <Column
                            title="材质"
                            dataIndex="key"
                            key="key"
                            render={(text, record, ind) => (
                              <span>
                                {getFieldDecorator(`materId_${ind}`, {
                                  initialValue: self.state.proViewDetail.textures[`${ind}`].textureId != '' ? self.state.proViewDetail.textures[`${ind}`].textureId : '',
                                })(
                                  <Select defaultValue="请输入材质" style={{ width: 120 }}>
                                    {self.state.materList.map(data => (
                                      <Option value={data.id}>{data.textureName}</Option>
                                    ))}
                                  </Select>,
                                   )}
                              </span>
                              )}
                            />
                          <Column
                            title="克重/g"
                            dataIndex="value"
                            key="value"

                            render={(text, record, ind) => (
                              <span>
                                {getFieldDecorator(`proMinWeight_${ind}`, {
                                  initialValue: self.state.proViewDetail.textures[`${ind}`].textureWeight.split('-')[0],
                                })(
                                  <InputNumber
                                    min={0}
                                    className={styles.width60}
                                    />,
                                  )}
                                  ~
                                  {getFieldDecorator(`proMaxWeight_${ind}`, {
                                    initialValue: self.state.proViewDetail.textures[`${ind}`].textureWeight.split('-')[1],
                                  })(
                                    <InputNumber
                                      min={0}
                                      className={styles.width60}
                                    />,
                                  )}
                              </span>
                              )}
                            />
                          <Column
                            title="批发价/￥"
                            key="priceOne"
                            render={(text, record, ind) => (
                              <span>
                                {getFieldDecorator(`proMinPrice_${ind}`, {
                                  initialValue: self.state.proViewDetail.textures[`${ind}`].texturePrice.split('-')[0],
                                })(
                                  <InputNumber
                                    min={0}
                                    className={styles.width60}
                                    />,
                                  )}
                                  ~
                                  {getFieldDecorator(`proMaxPrice_${ind}`, {
                                    initialValue: self.state.proViewDetail.textures[`${ind}`].texturePrice.split('-')[1],
                                  })(
                                    <InputNumber
                                      min={0}
                                      className={styles.width60}
                                    />,
                                  )}
                              </span>
                              )}
                            />
                        </Table>
                        <div className={styles.margin10}>
                          <Button
                            type="primary"
                            onClick={() => self.addProMater(self)}
                            >
                              增加材质+
                            </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.hr} />
                  <div>上传平面图</div>
                  <div>
                    <Row>
                      <Col span={8}>
                        <Col span={8}>
                          <div
                            className={styles.imgUpload}
                            onClick={() => self.imgUpload(self)}
                            >
                              上传平面
                            </div>
                          <input
                            type="file"
                            ref="imgInput"
                            onChange={() => self.imgInputFun(self)}
                            className={styles.displayHide}
                            />
                        </Col>
                        <Col span={16}>
                          <div>
                              请您上传单张或多张格式为png、jpg的图片，图片像素为534X534像素
                            </div>
                        </Col>
                      </Col>
                      <Col span={16}>
                        {this.state.imgDisplayList.map((ielem) => {
                          return (
                            <Col span={6} key={ielem.imageId}>
                              <div className={styles.textRight}>
                                <img
                                  src={Axios.imgURL + ielem.imageUrl}
                                  className={styles.imgSmall}
                                  />
                                {ielem.imageId}
                                <span
                                  className={styles.imgDel}
                                  onClick={() =>
                                      self.delImg(self.state, ielem.imageId)
                                    }
                                  >
                                    —
                                  </span>
                              </div>
                            </Col>
                          );
                        })}
                      </Col>
                    </Row>
                  </div>
                  <div>上传3D图（可选）</div>
                  <div>
                    <Row>
                      <Col span={8}>
                        <Col span={8}>
                          <div
                            className={styles.imgUpload}
                            onClick={() => self.rarUpload(self)}
                            >
                              上传3D图
                            </div>
                          <input
                            type="file"
                            ref="rarInput"
                            onChange={() => self.rarInputFun(self)}
                            className={styles.displayHide}
                            />
                        </Col>
                        <Col span={16}>
                          <div>请您上传格式为rar、zip的图包，文件大小为10M以内。</div>
                        </Col>
                      </Col>
                      <Col span={16}>
                        {proListData.map((ielem) => {
                          return (
                            <Col span={6}>
                              <div className={styles.textRight}>
                                <img
                                  src="../images/pro01.png"
                                  className={styles.imgSmall}
                                  />
                                <span className={styles.imgDel}>—</span>
                              </div>
                            </Col>
                          );
                        })}
                      </Col>
                      <Col span={24}>
                        <div className={styles.hr} />
                        <div className={styles.contant}>
                          <div>
                              上传图文详情
                              <span className={styles.titSubName}>
                                使用图文排版编辑器，上传你的作品详情。
                              </span>
                          </div>
                          <div className={styles.tempDiv} />
                        </div>
                        <div className={styles.textRight} style={{ marginTop: 20 }} />
                      </Col>
                    </Row>
                  </div>
                </Form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

proManage.propTypes = {

};

proManage.contextTypes = {
  router: PropTypes.object.isRequired,
};
const proManageFrom = Form.create()(proManage);
export default proManageFrom;
