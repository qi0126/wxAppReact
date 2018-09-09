import React from 'react';
import { connect } from 'dva';
import styles from './proManage.less';

import { Radio,Slider,Button,Row,Col,Card,Modal,Table,Input,Checkbox,Pagination  } from 'antd';

const { Column, ColumnGroup } = Table;//表格属性

const marks = {//滑块
  0: '0°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>10万以上</strong>,
  },
};
const tableState = {
  bordered: true,
  defaultExpandAllRows:true,
  expandRowByClick:false,
  pagination:false,
}


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const data = [{
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
}, {
  key: '18K金',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},{
  key: '玫瑰金',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},{
  key: '925x纯银',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},{
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},{
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},{
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},{
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},];

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

//分页第几页，每页显示多少条记录
function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}
//分页第几页
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

const proManage = ({dispatch,desProManage}) => {
  
  const showModal = () => {
    dispatch({
      type: 'desProManage/showModal',
      payload: true,
    });
  };

  const handleOk = () => {
    dispatch({
      type: 'desProManage/handleOk',
      payload: true,
    });
    setTimeout(() => {
      dispatch({
        type: 'desProManage/handleOk',
        payload: false,
      });
    }, 3000);
  };

  const handleCancel = () => {
    dispatch({
      type: 'desProManage/showModal',
      payload: false,
    });
  };
  return (
    <div className={styles.proManage}>
      <div className={styles.tit}>产品管理
        <span className={styles.titSubName}>选择产品添加到我的店铺，可回到“我的店铺”设置零售价或发布上架！</span>
      </div>
      <div className={styles.hr}/>
      <div>
        款式品类
        <RadioGroup onChange={onChange} defaultValue="a">
          <RadioButton value="a">全部</RadioButton>
          <RadioButton value="b">戒指</RadioButton>
          <RadioButton value="c">项链</RadioButton>
          <RadioButton value="d">耳环</RadioButton>
          <RadioButton value="e">耳饰</RadioButton>
        </RadioGroup>
      </div>
      <div className={styles.hr}/>
      <div>
        价格(此插件不符合功能需求，需以后重新找一个滑块组件！)
        <Slider range marks={marks} defaultValue={[0, 100000]}/>
      </div>
      <div className={styles.hr}/>
      <div>
        <Row>
          <Col span={12}>
            {/* 每页显示数量：
            <Button type="primary">20</Button>
            <Button>40</Button>
            <Button>60</Button> */}
          </Col>
          <Col span={12} className={styles.textRight}>
            <Checkbox>全选</Checkbox>
            <Button type="primary" onClick={showModal}>添加到店铺</Button>
            <Modal
              visible={desProManage.visible}
              title="One"
              onOk={handleOk}
              onCancel={handleCancel}
              width="1100"
              footer={[
                <Button key="back" onClick={handleCancel}>取消</Button>,
                <Button key="submit" type="primary" loading={desProManage.loading} onClick={handleOk}>
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
      <div className={styles.hr}/>
      <div>
        <div className="gutter-example">
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box" onClick={showModal}>
                <div className={styles.pro} >
                  <div>
                    <p className={styles.textRight}> <Checkbox></Checkbox></p>
                    <img src="../images/pro01.png" style={{width:200}}/>
                  </div>
                  <div className={styles.proDisplay}>
                    <p className={styles.proName}>Serpenti灵蛇耳环耳饰.....</p>
                    <p className={styles.proPrice}>批发价：  ￥3880.00</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box" onClick={showModal}>
                <div className={styles.pro} >
                  <div>
                    <p className={styles.textRight}> <Checkbox></Checkbox></p>
                    <img src="../images/pro02.png" style={{width:200}}/>
                  </div>
                  <div className={styles.proDisplay}>
                    <p className={styles.proName}>Serpenti灵蛇耳环耳饰.....</p>
                    <p className={styles.proPrice}>批发价：  ￥3880.00</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box" onClick={showModal}>
                <div className={styles.pro} >
                  <div>
                    <p className={styles.textRight}> <Checkbox></Checkbox></p>
                    <img src="../images/pro03.png" style={{width:200}}/>
                  </div>
                  <div className={styles.proDisplay}>
                    <p className={styles.proName}>Serpenti灵蛇耳环耳饰.....</p>
                    <p className={styles.proPrice}>批发价：  ￥3880.00</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box" onClick={showModal}>
                <div className={styles.pro}>
                  <div>
                    <p className={styles.textRight}> <Checkbox></Checkbox></p>
                    <img src="../images/pro04.png" style={{width:200}}/>
                  </div>
                  <div className={styles.proDisplay}>
                    <p className={styles.proName}>Serpenti灵蛇耳环耳饰.....</p>
                    <p className={styles.proPrice}>批发价：  ￥3880.00</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className={styles.textRight}>
            <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} onChange={onChange} />
          </div>
          <Modal
              visible={desProManage.visible}
              onOk={handleOk}
              onCancel={handleCancel}
              width="1100"
              footer={[
                <div className={styles.modalFooter}>
                  <Button key="submit" type="primary" loading={desProManage.loading} onClick={handleOk}>
                    添加到店铺
                  </Button>
                </div>
              ]}
            >
              <div className={styles.modalDiv}>
                <Row>
                  <Col span={12}>
                    <img src="../images/pro01.png" className={styles.mainImg}/>
                  </Col>
                  <Col span={12}>
                    <div className={styles.titTxt}>
                      平面图
                      <div>
                        <img src="../images/pro01.png" className={styles.subImg}/>
                        <img src="../images/pro02.png" className={styles.subImg}/>
                        <img src="../images/pro03.png" className={styles.subImg}/>
                        <img src="../images/pro04.png" className={styles.subImg}/>
                        <img src="../images/pro01.png" className={styles.subImg}/>
                      </div>
                    </div>
                    <div className={styles.titTxt}>
                      3D图
                      <div>
                        <img src="../images/pro01.png" className={styles.subImg}/>
                      </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className={styles.contant}>
                      <div className={styles.mainTxt}>
                        产品信息
                        <span className={styles.mainTxtSub}>
                          商品编号：464347478 
                        </span>
                      </div>
                      <div className={styles.tabTwo}>
                        <Row>
                          <Col span={2} className={styles.leftTxt}>产品类别：</Col>
                          <Col span={21} className={styles.rightTxt}>戒指</Col>
                          <Col span={2} className={styles.leftTxt}>产品名称：</Col>
                          <Col span={22} className={styles.rightTxt}>纯银镶晶钻简约掌心环</Col>
                          <Col span={2} className={styles.leftTxt}>宝石描述：</Col>
                          <Col span={22} className={styles.rightTxt}>首饰富有现代风格并带着优雅的摩纳哥气息， 设计灵感源自摩纳哥以及南法惬意悠然的乐活态度，是个深受爱戴的时尚首饰品牌。 凭着她对珠宝创作的满腔热枕，使品牌于珠宝界获得青睐、深受爱戴。</Col>
                          <Col span={2} className={styles.leftTxt}>款式尺寸:</Col>
                          <Col span={22} className={styles.rightTxt}>
                            <span className={styles.rightNumSpan}>12</span>
                            <span className={styles.rightNumSpan}>13</span>
                            <span className={styles.rightNumSpan}>14</span>
                            <span className={styles.rightNumSpan}>15</span>
                            <span className={styles.rightNumSpan}>16</span>
                            <span className={styles.rightNumSpan}>17</span>
                            <span className={styles.rightNumSpan}>18</span>
                            <span className={styles.rightNumSpan}>19</span>
                            <span className={styles.rightNumSpan}>20</span>
                            <span className={styles.rightNumSpan}>21</span>
                            <span className={styles.rightNumSpan}>22</span>
                          </Col>
                          <Col span={2} className={styles.leftTxt}>男式尺寸:</Col>
                          <Col span={22} className={styles.rightTxt}>
                            <span className={styles.rightNumSpan}>12</span>
                            <span className={styles.rightNumSpan}>13</span>
                            <span className={styles.rightNumSpan}>14</span>
                            <span className={styles.rightNumSpan}>15</span>
                            <span className={styles.rightNumSpan}>16</span>
                            <span className={styles.rightNumSpan}>17</span>
                            <span className={styles.rightNumSpan}>18</span>
                            <span className={styles.rightNumSpan}>19</span>
                            <span className={styles.rightNumSpan}>20</span>
                            <span className={styles.rightNumSpan}>21</span>
                            <span className={styles.rightNumSpan}>22</span>
                          </Col>
                          <Col span={2} className={styles.leftTxt}>女式尺寸:</Col>
                          <Col span={22} className={styles.rightTxt}>
                            <span className={styles.rightNumSpan}>12</span>
                            <span className={styles.rightNumSpan}>13</span>
                            <span className={styles.rightNumSpan}>14</span>
                            <span className={styles.rightNumSpan}>15</span>
                            <span className={styles.rightNumSpan}>16</span>
                            <span className={styles.rightNumSpan}>17</span>
                            <span className={styles.rightNumSpan}>18</span>
                            <span className={styles.rightNumSpan}>19</span>
                            <span className={styles.rightNumSpan}>20</span>
                            <span className={styles.rightNumSpan}>21</span>
                            <span className={styles.rightNumSpan}>22</span>
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
                        <Table dataSource={data} {...tableState}>
                            <Column
                              title="材质/重量/价格"
                              dataIndex="key"
                              key="aaa"
                            />
                          <Column
                            title="重量/g"
                            dataIndex="age"
                            key="age"
                          />
                          <Column
                            title="平台批发价/￥"
                            dataIndex="address"
                            key="address"
                          />
                          <Column
                            title="店铺零售价/￥"
                            // dataIndex="priceOne"
                            key="priceOne"
                            render={(text, record) => (
                              <span>
                                <Input addonBefore="￥" defaultValue='aaa' />
                              </span>
                            )}
                          />
                        </Table>
                      </div>
                      <div className={styles.textRight}>
                        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} onChange={onChange} />
                      </div>
                    </div>
                  </Col>   
                  <Col span={24}>
                    <div className={styles.contant}>
                      <div className={styles.mainTxt}>
                        图文详情
                      </div>
                      <div className={styles.tempDiv}>
                        
                      </div>
                    </div>
                  </Col>                                  
                </Row>
              </div>
            </Modal>
        </div>
      </div>
    </div>
  );
};

proManage.propTypes = {

};


export default connect(({ desProManage }) => ({
  desProManage,
}))(proManage);
