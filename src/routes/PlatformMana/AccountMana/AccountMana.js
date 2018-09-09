import React from 'react';
import { Table } from 'antd';
import { Modal, Button } from 'antd';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import ModalShop from './common/ModalShop/ModalShop';
import ModalDes from './common/ModalDes/ModalDes';
import ModalPlat from './common/ModalPlat/ModalPlat';

import { connect } from 'dva';
import styles from './AccountMana.less';

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

class AccountMana extends React.Component {
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
    this.changeTab(1);
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

  changeTab(e) {
    if (e === '2') {
      this.setState({
        operations: <Button type="primary" onClick={this.createDesigner.bind(this)}>创建设计师帐号</Button>,
      });
    } else if (e === '3') {
      this.setState({
        operations: <Button type="primary" onClick={this.createPlatform.bind(this)}>创建工厂帐号</Button>,
      });
    } else {
      this.setState({
        operations: <Button type="primary" onClick={this.createShop.bind(this)}>创建店铺帐号</Button>,
      });
    }
  }

  // 创建模块
  createDesigner() {
    this.context.router.push('/platformMana/accountMana/createDesigner');
  }

  createPlatform() {
    this.context.router.push('/platformMana/accountMana/createPlat');
  }

  createShop() {
    console.log(1111);

    this.context.router.push('/platformMana/accountMana/createShop');
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
      <div className={styles.accountMana} >
        <div className={styles.sAudit}>
          <div className={styles.top}>
            <div className={styles.tit}>帐号管理</div>
            <div className={styles.searchBox}>
              <Input style={{ width: 300 }} size="large" placeholder="输入工厂名称查询" />
              <Button className={styles.btn} type="primary">搜索</Button>
            </div>
          </div>
          <Tabs tabBarExtraContent={this.state.operations} onTabClick={this.changeTab.bind(this)}>
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

        {/* 店铺弹窗 */}
        <Modal
          visible={this.state.visibleShop}
          title="店铺审核"
          onOk={this.handleOkShop}
          onCancel={this.handleCancel.bind(this)}
          width="1100px"
          footer={
            <div style={this.modalFooter.call(this)} >
              <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                <Button key="submit" size="large" type="primary" loading={this.state.loadingShop} onClick={this.handleOkShop.bind(this)}>审核通过</Button></div>}
            >
          <ModalShop />
        </Modal>

        {/* 设计师弹窗 */}
        <Modal
          visible={this.state.visibleDes}
          title="店铺审核"
          onOk={this.handleOkDes}
          onCancel={this.handleCancel.bind(this)}
          width="1100px"
          footer={
            <div style={this.modalFooter.call(this)} >
              <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                <Button key="submit" size="large" type="primary" loading={this.state.loadingDes} onClick={this.handleOkDes.bind(this)}>审核通过</Button></div>}
            >
          <ModalDes />
        </Modal>

        {/* 平台管理弹窗 */}
        <Modal
          visible={this.state.visiblePlat}
          title="店铺审核"
          onOk={this.handleOkPlat}
          onCancel={this.handleCancel.bind(this)}
          width="1100px"
          footer={
            <div style={this.modalFooter.call(this)} >
              <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                <Button key="submit" size="large" type="primary" loading={this.state.loadingPlat} onClick={this.handleOkPlat.bind(this)}>审核通过</Button></div>}
            >
          <ModalPlat />
        </Modal>

      </div>
    );
  }

}

AccountMana.propTypes = {

};

AccountMana.contextTypes = {
  router: PropTypes.object.isRequired,
};


export default connect(({ accountMana }) => ({
  accountMana,
}))(AccountMana);
