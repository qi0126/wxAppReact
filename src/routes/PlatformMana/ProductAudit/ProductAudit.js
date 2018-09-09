import React from 'react';
import { Table } from 'antd';
import { Modal, Button } from 'antd';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import app from 'app';

import { connect } from 'dva';
import styles from './ProductAudit.less';

import DesUpload from './common/DesUpload/DesUpload';
import FactoryUpload from './common/FactoryUpload/FactoryUpload';
import ShopUpload from './common/ShopUpload/ShopUpload';

// app.$tool.test();

const TabPane = Tabs.TabPane;


const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
  address: '西湖区湖底公园1号',
  job: 'xxx',
  startTime: 'xxx',
  endTime: 'xxx',
  status: 'xxx',
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号',
  job: 'xxx',
  startTime: 'xxx',
  endTime: 'xxx',
  status: 'xxx',
}];

const shopCol = [{
  title: <span style={{ display: 'table', margin: '0 auto' }}>帐号</span>,
  dataIndex: 'name',
  key: 'name',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>店铺名称</span>,
  dataIndex: 'age',
  key: 'age',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>申请人</span>,
  dataIndex: 'address',
  key: 'address',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>实体店</span>,
  dataIndex: 'job',
  key: 'job',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>申请时间</span>,
  dataIndex: 'startTime',
  key: 'startTime',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>权限到期</span>,
  dataIndex: 'endTime',
  key: 'endTime',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>状态</span>,
  dataIndex: 'status',
  key: 'status',
  render: () => (
    <div>
      <Button type="primary">启用</Button>
      <Button type="primary" style={{ marginLeft: 10 }} ghost>禁用</Button>
    </div>
  ),
}];

const desCol = [{
  title: <span style={{ display: 'table', margin: '0 auto' }}>帐号</span>,
  dataIndex: 'name',
  key: 'name',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>申请人</span>,
  dataIndex: 'age',
  key: 'age',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>地区</span>,
  dataIndex: 'address',
  key: 'address',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>个人品牌</span>,
  dataIndex: 'job',
  key: 'job',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>申请时间</span>,
  dataIndex: 'startTime',
  key: 'startTime',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>权限到期</span>,
  dataIndex: 'endTime',
  key: 'endTime',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>状态</span>,
  dataIndex: 'status',
  key: 'status',
  render: () => (
    <div>
      <Button type="primary">启用</Button>
      <Button type="primary" style={{ marginLeft: 10 }} ghost>禁用</Button>
    </div>
  ),
}];


const factCol = [{
  title: <span style={{ display: 'table', margin: '0 auto' }}>公司名称</span>,
  dataIndex: 'name',
  key: 'name',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>申请人</span>,
  dataIndex: 'age',
  key: 'age',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>制造类型</span>,
  dataIndex: 'address',
  key: 'address',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>申请时间</span>,
  dataIndex: 'job',
  key: 'job',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>权限到期</span>,
  dataIndex: 'endTime',
  key: 'endTime',
}, {
  title: <span style={{ display: 'table', margin: '0 auto' }}>审核状态</span>,
  dataIndex: 'status',
  key: 'status',
  render: () => (
    <div>
      <Button type="primary">启用</Button>
      <Button type="primary" style={{ marginLeft: 10 }} ghost>禁用</Button>
    </div>
  ),
}];


class ProductAudit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleShop: false,
      visibleDes: false,
      visiblePlat: false,
      loadingShop: false,
      loadingDes: false,
      loadingPlat: false,
      operations: '',
    };
  }

  componentDidMount() {
  }

  // 点击确定
  handleOkShop() {
    this.setState({
      loadingShop: true,
    });
  }

  handleOkDes() {
    this.setState({
      loadingDes: true,
    });
  }
  handleOkPlat() {
    this.setState({
      loadingPlat: true,
    });
  }

  // 点击返回
  handleCancel() {
    this.setState({
      visibleShop: false,
      visibleDes: false,
      visiblePlat: false,
    });
  }


  // 点击店铺审核弹窗
  rowClickShop(e, index) {
    console.log(e, index);
    this.setState({
      visibleShop: true,
    });
  }

  // 点击设计师审核弹窗
  rowClickDes(e, index) {
    console.log(e, index);
    this.setState({
      visibleDes: true,
    });
  }

  // 点击平台审核弹窗
  rowClickPlat(e, index) {
    console.log(e, index);
    this.setState({
      visiblePlat: true,
    });
  }


  // 单元格样式
  rowClass() {
    return styles.rowClass;
  }

    // 底部样式
  modalFooter() {
    return {
      marginRight: '20px',
      height: '100px',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
    };
  }

  render() {
    return (
      <div className={styles.productAudit} >
        <div className={styles.sAudit}>
          <div className={styles.top}>
            <div className={styles.tit}>帐号管理</div>
            <div className={styles.searchBox}>
              <Input style={{ width: 300 }} size="large" placeholder="输入工厂名称查询" />
              <Button className={styles.btn} type="primary">搜索</Button>
            </div>
          </div>
          <Tabs >
            <TabPane tab="店铺" key="1">
              <div className={styles.tableWrap}>
                <div className={styles.table}>
                  <Table
                    onRowClick={this.rowClickShop.bind(this)}
                    rowClassName={this.rowClass} dataSource={dataSource} columns={shopCol} bordered
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="设计师" key="2">
              <div className={styles.tableWrap}>
                <div className={styles.table}>
                  <Table
                    onRowClick={this.rowClickDes.bind(this)}
                    rowClassName={this.rowClass} dataSource={dataSource} columns={desCol} bordered
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="工厂" key="3">
              <div className={styles.tableWrap}>
                <div className={styles.table}>
                  <Table
                    onRowClick={this.rowClickPlat.bind(this)}
                    rowClassName={this.rowClass} dataSource={dataSource} columns={factCol} bordered
                  />
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>

        {/* 设计师上传弹窗 */}
        <Modal
          visible={this.state.visibleShop}
          title="设计师上传审核"
          onOk={this.handleOkShop}
          onCancel={this.handleCancel.bind(this)}
          width="1100px"
          footer={
            <div style={this.modalFooter.call(this)} >
              <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                <Button key="submit" size="large" type="primary" loading={this.state.loadingShop} onClick={this.handleOkShop.bind(this)}>审核通过</Button></div>}
        >
          <DesUpload />
        </Modal>

        {/* 工厂上传弹窗 */}
        <Modal
          visible={this.state.visibleDes}
          title="工厂上传审核"
          onOk={this.handleOkDes}
          onCancel={this.handleCancel.bind(this)}
          width="1100px"
          footer={
            <div style={this.modalFooter.call(this)} >
              <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                <Button key="submit" size="large" type="primary" loading={this.state.loadingDes} onClick={this.handleOkDes.bind(this)}>审核通过</Button></div>}
        >
          <FactoryUpload />
        </Modal>

        {/* 店铺上传弹窗 */}
        <Modal
          visible={this.state.visiblePlat}
          title="店铺上传审核"
          onOk={this.handleOkPlat}
          onCancel={this.handleCancel.bind(this)}
          width="1100px"
          footer={
            <div style={this.modalFooter.call(this)} >
              <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                <Button key="submit" size="large" type="primary" loading={this.state.loadingPlat} onClick={this.handleOkPlat.bind(this)}>审核通过</Button></div>}
        >
          <ShopUpload />
        </Modal>

      </div>
    );
  }

}

ProductAudit.propTypes = {

};

ProductAudit.contextTypes = {
  router: PropTypes.object.isRequired,
};


export default connect(({ productAudit }) => ({
  productAudit,
}))(ProductAudit);
