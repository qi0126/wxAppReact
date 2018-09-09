import React from 'react';
import { connect } from 'dva';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Axios from '../../../utils/request'; // axios请求
import styles from './uploadPro.less';

import {
  Radio,
  Button,
  Row,
  Col,
  Table,
  Input,
  Select,
  message,
  InputNumber,
  Form,
  Icon,
  Checkbox,
  Switch,
  Slider,
  Upload,
  Rate,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const { Column } = Table; // 表格属性
const proListData = [{}];
const tableState = {
  bordered: true,
  defaultExpandAllRows: true,
  expandRowByClick: false,
  pagination: false,
};
class UploadPro extends React.Component {
  constructor(props) {
    super(props);
    // 初始化参数
    this.state = {
      categoryList: [], // 产品分类接口数据
      categoryValue: '', // 产品分类选中信息
      crowdList: [], // 适合人群接口数据
      crowdValue: '', // 适合人群选中信息\
      materList: [], // 材质接口数据
      imgDisplayList: [], // 图片示意图
      message: '',
      proSizeList: [{ value: '' }], // 产品款式尺寸
      proMaterList: [{ weight: 0, price: 0 }], // 产品材质
      productStr: {
        // 传过去
        productName: '', // 产品名称
        productDescription: '', // 宝石描述
        categoryId: 0, // 分类ID
        categoryName: '', // 分类名称
        crowdId: 0, // 适合人群ID
        crowdName: '', // 适合人群名称
        details: '', // 图文详情
        stonePrice: 0, // 宝石价格
        wagePrice: 0, // 生产工费价格
        combinationPrice: 0, // 批发价格，默认第一个
        productStatus: 1, // 上架状态 0 未上架 1 上架 2 下架
        auditStatus: 0, // 审核状态 0 不需要审核 1 审核中 2 已审核 3 审核通过 4 驳回
        // figureFrom: {
        //   figureImageId: 0, // 3D图包的ID
        // },
        imageIdFroms: [],
        designs: [
          {
            designName: '款式尺寸', // 款式名称
            designValue: '', // 款式大小，以逗号隔开
          },
        ],
        textures: [],
      },
    };
  }

  componentDidMount() {
    // 查询分类数据信息
    Axios.ajax_get('/CommonManage/selectCategoryNumber')
      .then(
        (res) => {
          if (res.data.code == 200) {
            this.setState({
              categoryList: res.data.data,
            });
          } else {
            message.error(res.data.msg);
          }
        },
      )
      .catch((error) => {
        message.error(error);
      });
    // 查询适合人群数据信息
    Axios.ajax_get('/CommonManage/selectCrowdNumber')
      .then(
        (res) => {
          if (res.data.code == 200) {
            this.setState({
              crowdList: res.data.data,
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
  }

  // 平面产品图片上传
  imgUpload(thiselem) {
    thiselem.refs.imgInput.click();
  }
  // 平面产品图片删除
  delImg(thiselem, elem) {
    console.log(thiselem);
    console.log(elem);
  }
  // 事件平面产品图片上传
  imgInputFun(thiselem) {
    // console.log(this.refs.imgInput.files)
    const params = new FormData();
    params.append('files', thiselem.refs.imgInput.files[0]);

    // console.log(this.state.imgDisplayList)
    // 图片上传
    Axios.ajax_post_formdata('/imagers/uploadImage', params)
      .then(
        function (res) {
          if (res.data.code == '200') {
            const imgList = this.state.imgDisplayList;
            imgList.push(res.data.data);
            this.setState({
              imgDisplayList: imgList,
            });
            // console.log(this.state.imgDisplayList)
          } else {
            message.error(res.data.msg);
          }
        }.bind(thiselem),
      )
      .catch((error) => {
        message.error(error);
      });
  }

  // 平面产品图片上传
  rarUpload(thiselem) {
    console.log(thiselem);
    // console.log(self.refs.rarInput)
    thiselem.refs.rarInput.click();
    // console.log(self);
  }
  // 平面产品图片删除
  delRar(thiselem, elem) {
    console.log(thiselem);
    console.log(elem);
  }
  // 3D压缩图上传
  rarInputFun(thiselem) {
    console.log(thiselem.refs.rarInput.files);
    // var params = new FormData();
    // params.append('files',this.refs.imgInput.files[0])

    // console.log(this.state.imgDisplayList)
    // 压缩包上传
    // Axios.ajax_post_formdata('/imagers/uploadImage',params)
    // .then(function(res){
    //   if(res.data.code == '200'){
    //     var imgList = this.state.imgDisplayList
    //     imgList.push(res.data.data)
    //     this.setState({
    //       imgDisplayList:imgList
    //     })
    //     // console.log(this.state.imgDisplayList)
    //   }else{
    //     message.error(res.data.msg);
    //   }
    // }.bind(this))
    // .catch(function(error){
    //   message.error(error);
    // });
  }

  // 产品上架保存
  saveData(thiselem) {
    // console.log(this.state)
    // console.log(JSON.stringify(submitData.productStr))
    // let paramsSubmit = {
    //   'productStr':'hhh'
    // };
    console.log('aaaa');
    console.log(this.state.productStr);
    // var post_data = new FormData();
    // post_data.append('productStr',JSON.stringify(submitData.productStr));
    // // console.log(paramsSubmit)
    // Axios.ajax_post_formdata('/product/addProductNumber',post_data)
    // .then(function(res){
    //   if(res.data.code == '200'){

    //   }else{
    //     message.error(res.data.msg);
    //   }
    // }.bind(this))
    // .catch(function(error){
    //   message.error(error);
    // });
  }

  // 添加款式尺寸
  addProSize(elem) {
    elem.state.proSizeList.push({ value: '' });
    elem.setState({
      proSizeList: elem.state.proSizeList,
    });
  }
  // 增加材质事件
  addProMater(elem) {
    elem.state.proMaterList.push({ weight: 0, price: 0 });
    elem.setState({
      proMaterList: elem.state.proMaterList,
    });
  }
  // 页眉返回产品管理
  returnPro(thiselem) {
    thiselem.context.router.push('/MyFactory/proManage');
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
      <div className={styles.UploadPro}>
        <div onClick={() => self.returnPro(self)}> 《 返回</div>
        <div className={styles.hr} />
        <div>
          <Form onSubmit={this.newProSubmit}>
            <FormItem {...formItemLayout} label="产品类别" hasFeedback>
              {getFieldDecorator('categoryId', {
                // rules: [{ required: true, message: '请选择产品类别!' }],
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
                rules: [
                  // { required: true, message: '请选择适合人群!', type: 'array' },
                ],
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
                initialValue: self.state.message,
              })(<Input style={{ width: 480 }} placeholder="请输入款式名称" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="宝石描述">
              {getFieldDecorator('productDescription', {
                initialValue: self.state.productStr.productDescription,
              })(<TextArea placeholder="宝石描述" />)}
            </FormItem>
            <FormItem {...formItemTwo} label="款式尺寸">
              {self.state.proSizeList.map((data, ind) => (
                <Col span={2} style={{ marginRight: 20 }}>
                  {getFieldDecorator(`size_${ind}`, {
                    initialValue: data.value,
                  })(<Input placeholder="" />)}
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
                        initialValue: self.state.productStr.stonePrice,
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
                        initialValue: self.state.productStr.wagePrice,
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
                  <Table dataSource={self.state.proMaterList} {...tableState}>
                    <Column
                      title="材质"
                      dataIndex="key"
                      key="key"
                      render={(text, record, ind) => (
                        <span>
                          {getFieldDecorator(`materId_${ind}`, { rules: [{ required: true, message: '请选择适合人群!', type: 'array' }] })(
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
                            initialValue: record.weight,
                          })(
                            <InputNumber
                              min={0}
                              className={styles.width60}
                            />,
                          )}
                          ~
                          {getFieldDecorator(`proMaxWeight_${ind}`, {
                            initialValue: record.weight,
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
                            initialValue: record.price,
                          })(
                            <InputNumber
                              min={0}
                              className={styles.width60}
                            />,
                          )}
                          ~
                          {getFieldDecorator(`proMaxPrice_${ind}`, {
                            initialValue: record.price,
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
                  <div className={styles.textRight} style={{ marginTop: 20 }}>
                    <Button
                      type="primary"
                      onClick={() => self.saveData(self)}
                      style={{ marginRight: 20 }}
                    >
                      暂存到我的产品
                    </Button>
                    <Button type="primary" htmlType="submit">
                      发布上架
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
UploadPro.contextTypes = {
  router: PropTypes.object.isRequired,
};


const UploadProFrom = Form.create()(UploadPro);
export default UploadProFrom;
