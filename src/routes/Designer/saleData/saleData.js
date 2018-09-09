import React from 'react';
import { connect } from 'dva';
import styles from './saleData.less';

import { Radio, Slider, Button, Row, Col, Card, Modal, Table, Input,Select,Pagination } from 'antd';
const Option = Select.Option;

const { Column, ColumnGroup } = Table;// 表格属性

const marks = {// 滑块
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

const data = [{
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
  imgUrl:'./images/pro01.png'
}, {
  key: '18K金',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
  imgUrl:'./images/pro02.png'
}, {
  key: '玫瑰金',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
  imgUrl:'./images/pro03.png'
}, {
  key: '925x纯银',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
  imgUrl:'./images/pro04.png'
}, {
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
  imgUrl:'./images/pro01.png'
}, {
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
  imgUrl:'./images/pro02.png'
}, {
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
  imgUrl:'./images/pro03.png'
}, {
  key: 'PT950',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
  imgUrl:'./images/pro04.png'
} ];

function handleChange(value) {
  console.log(`selected ${value}`);
}


//分页第几页，每页显示多少条记录
function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}
//分页第几页
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}




const saleData = ({ dispatch, desSaleData }) => {

  const showModal = () => {
    dispatch({
      type: 'desSaleData/showModal',
      payload: true,
    });
  };

  const handleOk = () => {
    dispatch({
      type: 'desSaleData/handleOk',
      payload: true,
    });
    setTimeout(() => {
      dispatch({
        type: 'desSaleData/handleOk',
        payload: false,
      });
    }, 3000);
  };

  const handleCancel = () => {
    dispatch({
      type: 'desSaleData/showModal',
      payload: false,
    });
  };
  return (
    <div className={styles.saleData}>
      <div className={styles.tit}>销售数据
      </div>
      <div className={styles.hr} />
      <div>
        <Row  className={styles.boxAlignCenter}>
          <Col span={6}>
            <span className={styles.txtGold}>
              选择系列 > 
            </span>
            <span>
              全部系列
            </span>
          </Col>
          <Col span={6}>
            <span className={styles.txtGold}>
              销售排行 > 
            </span>
            <span>
              按产品销量
            </span>
          </Col>
          <Col span={6}>
            <span className={styles.txtGold}>
              销售时间 > 
            </span>
            <span>
              最近一天
            </span>
          </Col>
          <Col span={6}>
            <span className={styles.txtGoldTTwo}>
              总销售额  ：
            </span>
            <span className={styles.txtTitOne}>
              ¥ 67637.00
            </span>
          </Col>
        </Row>
      </div>
      <div className={styles.hr} />
      <div className={styles.tabOne}>
        <Table dataSource={data} bordered {...tableState}>
            <Column
              title="产品图片"
              key="imgUrl"
              render={(text, record) => (
                <span>
                  <img src={record.imgUrl} className={styles.imgSmall}/>
                </span>
              )}
            />
            <Column
              title="产品名称"
              dataIndex="key"
              key="key"
            />
          <Column
            title="品类"
            dataIndex="age"
            key="age"
          />
          <Column
            title="零售价"
            dataIndex="address"
            key="address"
          />
          <Column
            title="销售数量（件）"
            dataIndex="priceOne"
            key="priceOne"
          />
          <Column
            title="单款销售额"
            key="action"
            render={(text, record) => (
              <span>
                aaaaaaaa
              </span>
            )}
          />
        </Table>
      </div>
      <div className={styles.textRight}>
        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} onChange={onChange} />
      </div>
      <div className={styles.hr} />
      <div>
      <Row  className={styles.boxAlignCenter}>
          <Col span={6}>
            <span className={styles.txtGold}>
              选择系列 > 
            </span>
            <span>
              <Select defaultValue="全部系列" style={{ width: 120 }} onChange={handleChange}>
                <Option value="全部系列">全部系列</Option>
                <Option value="A系列">A系列</Option>
                <Option value="B系列">B系列</Option>
                <Option value="C系列">C系列</Option>
              </Select>
            </span>
          </Col>
          <Col span={6}>
            <span className={styles.txtGold}>
              销售排行 > 
            </span>
            <span>
              <Select defaultValue="按产品销售" style={{ width: 120 }} onChange={handleChange}>
                <Option value="按产品销售">按产品销售</Option>
                <Option value="按销售金额">按销售金额</Option>
              </Select>
            </span>
          </Col>
          <Col span={6}>
            <span className={styles.txtGold}>
              销售时间 > 
            </span>
            <span>
              <Select defaultValue="全部" style={{ width: 120 }} onChange={handleChange}>
                <Option value="最近一天">最近一天</Option>
                <Option value="最近一周">最近一周</Option>
                <Option value="最近一月">最近一月</Option>
              </Select>
            </span>
          </Col>
          <Col span={6}>
          </Col>
        </Row>
      </div>
    </div>
  );
};

saleData.propTypes = {

};


export default connect(({ desSaleData }) => ({
  desSaleData,
}))(saleData);
