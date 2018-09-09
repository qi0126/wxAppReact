import React from 'react';
import { Link } from 'react-router';
import { connect } from 'dva';
import styles from './orderCenter.less';

import { Radio, Slider, Button, Row, Col, Card, Modal, Table, Input, Select, Pagination } from 'antd';

const Option = Select.Option;


const columns = [
  { title: '产品详情', key: 'name', render: (text, record) => <span style={{ paddingLeft: 30 }}><img src={record.imgUrl} className={styles.imgSmall} />{record.name}</span> },
  { title: '数量', dataIndex: 'num', key: 'num' },
  { title: '工厂批发价', dataIndex: 'priceOne', key: 'priceOne' },
  { title: '克重', dataIndex: 'weight', key: 'weight' },
  { title: '材质', dataIndex: 'mater', key: 'mater' },
  { title: '尺寸', dataIndex: 'size', key: 'size' },
  { title: 'Action', dataIndex: '', key: 'x', render: () => <Link to={{ pathname: '/MyFactory/orderDetail', query: { orderId: '77008093354' } }}>未发货<p>订单详情/备注</p></Link> },
];

const data = [
  { key: 1, name: '纯银镶晶钻简约掌心环', imgUrl: '../images/pro01.png', num: 'X1', priceOne: '￥3166.00~￥3566.00', weight: '0.35g~0.46g', mater: 'PT950', size: '16', description: '商品编号：326435778' },
  { key: 2, name: '纯银镶晶钻简约掌心环', imgUrl: '../images/pro02.png', num: 'X2', priceOne: '￥3166.00~￥3566.00', weight: '0.35g~0.46g', mater: 'PT950', size: '16', description: '商品编号：326435779' },
  { key: 3, name: '纯银镶晶钻简约掌心环', imgUrl: '../images/pro03.png', num: 'X3', priceOne: '￥3166.00~￥3566.00', weight: '0.35g~0.46g', mater: 'PT950', size: '16', description: '商品编号：326435780' },
];
// 分页第几页，每页显示多少条记录
function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}
// 分页第几页
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}
const tableState = {
  bordered: true,
  defaultExpandAllRows: true,
  expandRowByClick: false,
  pagination: false,
  showHeader: false,
};


const orderCenter = ({ dispatch, myfamOrderCenter }) => {

  return (
    <div className={styles.saleData}>
      <div className={styles.tit}>订单中心
        <span className={styles.titRight}>
          <Input placeholder="商品名称/订单号" className={styles.input50} />
          <Button type="primary">搜索</Button>
        </span>
      </div>
      <div className={styles.hr} />
      <div>
        <Row className={styles.boxAlignCenter}>
          <Col span={7}>
            <Select defaultValue="最近一个月订单" style={{ width: 120 }}>
              <Option value="全部订单">全部订单</Option>
              <Option value="今日订单">今日订单</Option>
              <Option value="最近一个月订单">最近一个月订单</Option>
              <Option value="最近一年订单">最近一年订单</Option>
            </Select>
            产品详情
          </Col>
          <Col span={2}>
            数量
          </Col>
          <Col span={3}>
            工厂批发价
          </Col>
          <Col span={3}>
            克重
          </Col>
          <Col span={3}>
            材质
          </Col>
          <Col span={2}>
            尺寸
          </Col>
          <Col span={4}>
            <Select defaultValue="未发货" style={{ width: 120 }}>
              <Option value="未付款">未付款</Option>
              <Option value="未发货">未发货</Option>
              <Option value="已发货">已发货</Option>
              <Option value="已完成">已完成</Option>
            </Select>
          </Col>
        </Row>
      </div>
      <div className={styles.hr} />
      <div className={styles.tabOne}>
        <div style={{ marginTop: 30 }}>
          <div className={styles.tabOneTopTxt}>
            <span>2018-08-15 15:22:10</span>
            <span>订单号:77008093354</span>
          </div>
          <Table
            columns={columns}
            {...tableState}
            expandedRowRender={record => <p style={{ margin: 0, textAlign: 'left', paddingLeft: 110 }}>{record.description}</p>}
            dataSource={data}
          />
        </div>
        <div style={{ marginTop: 30 }}>
          <div className={styles.tabOneTopTxt}>
            <span>2018-08-15 15:22:10</span>
            <span>订单号:77008093354</span>
          </div>
          <Table
            columns={columns}
            {...tableState}
            expandedRowRender={record => <p style={{ margin: 0, textAlign: 'left', paddingLeft: 110 }}>{record.description}</p>}
            dataSource={data}
          />
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.textRight}>
        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} onChange={onChange} />
      </div>
    </div>
  );
};

orderCenter.propTypes = {

};


export default connect(({ myfamOrderCenter }) => ({
  myfamOrderCenter,
}))(orderCenter);
