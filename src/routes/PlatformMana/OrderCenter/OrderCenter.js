import React from 'react';
import { connect } from 'dva';
import { Select } from 'antd';
import { Button } from 'antd';

import styles from './OrderCenter.less';

const OrderCenter = ({ dispatch, orderCenter }) => {
  const Option = Select.Option;

  const timeOptions = [{
    val: '请选择',
    code: 1,
  }, {
    val: '全部订单',
    code: 2,
  }, {
    val: '今日',
    code: 3,
  }, {
    val: '最近一个月订单',
    code: 4,
  }, {
    val: '最近一年订单',
    code: 5,
  }];

  const statusOptions = [{
    val: '请选择',
    code: 1,
  }, {
    val: '未付款',
    code: 2,
  }, {
    val: '未发货',
    code: 333,
  }, {
    val: '已发货',
    code: 4,
  }, {
    val: '已完成',
    code: 5,
  }];

  const timeItems = timeOptions.map(number =>
    <Option key={number.code}>{number.val}</Option>,
  );

  const statusItems = statusOptions.map(number =>
    <Option key={number.code}>{number.val}</Option>,
  );

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };


  return (
    <div className={styles.orderCenter} >
      <div className={styles.sAudit}>
        <div className={styles.top}>
          <div className={styles.tit}>订单中心</div>
          <div className={styles.searchBox}>
            <input type="text" placeholder="商品名称/订单号/下单时间" className={styles.left} />
            <div className={styles.btn}>搜索</div>
          </div>
        </div>
        <div className={styles.tableWrap}>

          {/* 订单 */}
          <div className={styles.table}>
            <div className={styles.tbTr}>
              <div className={styles.tbTh} style={{ width: 296, paddingRight: 10, justifyContent: 'flex-start' }}>
                <Select defaultValue={timeOptions[0].val} style={{ width: 160 }} onChange={handleChange}>
                  {timeItems}
                </Select>
              </div>
              <div className={styles.tbTh} style={{ flex: 1 }}>
                  产品单价
              </div>
              <div className={styles.tbTh} style={{ flex: 1 }}>
                  数量
              </div>
              <div className={styles.tbTh} style={{ flex: 1 }}>
                  订单总额
              </div>
              <div className={styles.tbTh} style={{ flex: 1 }}>
                  收货信息
              </div>
              <div className={styles.tbTh} style={{ flex: 1 }}>
                <Select defaultValue={timeOptions[0].val} style={{ width: 100 }} onChange={handleChange}>
                  {timeItems}
                </Select>
              </div>
              <div className={styles.tbTh} style={{ flex: 1, marginLeft: 10 }}>
                <Select defaultValue={statusOptions[0].val} style={{ width: 100 }} onChange={handleChange}>
                  {statusItems}
                </Select>
              </div>
            </div>

            <div className={styles.tableInfo}>
              <div className={styles.tr} style={{ padding: '0 24px' }}>
                <div className={styles.th}>
                  <span>2018-06-19 18:36:10</span>
                  <span style={{ marginLeft: 10 }}>订单号： 77008093354</span>
                </div>
                <div className={styles.th}>
                  <Button type="primary">确认发货</Button>
                </div>
              </div>

              <div className={styles.tr} >
                {/* 参数列表 */}
                <div className={styles.td} style={{ flex: 5, alignItems: 'flex-start' }}>
                  <div className={styles.itemTable}>

                    <div className={styles.itemTr}>
                      <div className={styles.itemTd} style={{ flex: 3 }} >
                        <img className={styles.img} src="" alt="" />
                        <p>纯银镶晶钻简约掌心环</p>
                      </div>
                      <div className={styles.itemTd} style={{ flex: 1 }}>￥ 2342.00</div>
                      <div className={styles.itemTd} style={{ flex: 1 }}>X1</div>
                    </div>

                    <div className={styles.itemTr}>
                      <div className={styles.itemTd} style={{ flex: 3 }} >
                        <img className={styles.img} src="" alt="" />
                        <p>纯银镶晶钻简约掌心环</p>
                      </div>
                      <div className={styles.itemTd} style={{ flex: 1 }}>￥ 3543.00</div>
                      <div className={styles.itemTd} style={{ flex: 1 }}>X1</div>
                    </div>

                  </div>
                </div>

                <div className={styles.td} style={{ flex: 1 }}>
                  <p>在线支付</p>
                  <p>¥ 8978.00</p>
                </div>
                <div className={styles.td} style={{ flex: 1 }}>
                  <img src="" alt="" />
                  <p>李晴雯</p>
                </div>
                <div className={styles.td} style={{ flex: 1 }}>深圳施华洛珠宝</div>
                <div className={styles.td} style={{ flex: 1 }}>
                  <p>未发货</p>
                  <p>订单详情/备注</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

OrderCenter.propTypes = {

};

export default connect(({ orderCenter }) => ({
  orderCenter,
}))(OrderCenter);
