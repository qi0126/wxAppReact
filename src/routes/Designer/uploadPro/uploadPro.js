import React from 'react';
import { connect } from 'dva';
import styles from './uploadPro.less';

import { Radio,Slider,Button,Row,Col,Card,Modal,Table,Input,Select  } from 'antd';
const { TextArea } = Input;

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

const state = {
  seriesRadio: 1,
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
  key: 'PT951',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},{
  key: 'PT952',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},{
  key: 'PT953',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},{
  key: 'PT954',
  name: '3.45g',
  age: '￥2366.00',
  address: '￥3100.00~￥3888.00',
  priceOne: '￥2366.00',
},];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};


const DesUploadPro = ({dispatch,desUploadPro}) => {

  
  const showModal = () => {
    dispatch({
      type: 'desUploadPro/showModal',
      payload: true,
    });
  };

  const handleOk = () => {
    dispatch({
      type: 'desUploadPro/handleOk',
      payload: true,
    });
    setTimeout(() => {
      dispatch({
        type: 'desUploadPro/handleOk',
        payload: false,
      });
    }, 3000);
  };

  const handleCancel = () => {
    dispatch({
      type: 'desUploadPro/showModal',
      payload: false,
    });
  };

  const changeSeries =(e) => {
    dispatch({
      type: 'desUploadPro/changeSeries',
      payload: e.target.value,
    });
  }
  const handleChange =(e) => {
    dispatch({
      type: 'desUploadPro/handleChange',
      payload: e.target.value,
    });
  }

  return (
    <div className={styles.UploadPro}>
      <div className={styles.tit}>上传产品
      </div>
      <div className={styles.hr}/>
      <div>
        <RadioGroup value={desUploadPro.seriesRadio} onChange={changeSeries}>
          <Radio className={styles.radioStyle} value={1}>
            无系列
            <span>直接上传不添加系列</span>
          </Radio>
          <Radio className={styles.radioStyle} value={2}>
            选择系列
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={handleChange}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Radio>
        </RadioGroup>
      </div>
      <div className={styles.hr}/>
      <div className={styles.proContent}>
        <Radio.Group defaultValue="b" buttonStyle="solid">
          <Radio.Button value="a">修改系列</Radio.Button>
          <Radio.Button value="b">创建新系列</Radio.Button>
        </Radio.Group>
        <br/>
        <Input placeholder="系列名称" style={{width:480}}/>
        <TextArea rows={4} placeholder="系列介绍" />
        <p className={styles.textRight}>
          最多可输入200字
          <Button type="primary">确定</Button>
        </p>
      </div>
      <div className={styles.hr}/>
      <div className={styles.proContent}>
        <Row>
          <Col span={2}>产品类别</Col>
          <Col span={22}>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
          </Col>
          <Col span={2}>适合人群</Col>
          <Col span={22}>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
          </Col>
          <Col span={2}>适合人群</Col>
          <Col span={22}>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
          </Col>
          <Col span={2}>适合人群</Col>
          <Col span={22}>
            <Input placeholder="款式名称" style={{width:480}}/>
          </Col>
          <Col span={2}>宝石描述</Col>
          <Col span={22}>
            <TextArea rows={4} placeholder="宝石描述" />
          </Col>
          <Col span={2}>款式尺寸</Col>
          <Col span={22}>
            <Input className={styles.inputOne}/>
            <Input className={styles.inputOne}/>
            <Input className={styles.inputOne}/>
            <Input className={styles.inputOne}/>
            <span>添加尺寸+</span>
          </Col>
        </Row>
      </div>
      <div className={styles.hr}/>
      <div>
        <div >
          产品材质/重量/价格
          <div>
            <Table dataSource={data}  {...tableState}>
                <Column
                  title="材质"
                  dataIndex="key"
                  key="key"
                  render={(text, record) => (
                    <span>
                      <Input defaultValue={text} className={styles.textCenter}/>
                    </span>
                  )}
                />
              <Column
                title="预估克重/g"
                dataIndex="age"
                key="age"
                render={(text, record) => (
                  <span>
                    <Input defaultValue={text} className={styles.width60}/>
                    ~<Input defaultValue={text} className={styles.width60}/>
                  </span>
                )}
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
        </div>
      </div>
      <div className={styles.hr}/>
      <div>上传平面图</div>
      <div>
        <Row>
          <Col span={8}>
            <Col span={8}>
              <div className={styles.imgUpload}>上传平面</div>
            </Col>
            <Col span={16}>
              <div>请您上传单张或多张格式为png、jpg的图片，图片像素为534X534像素</div>
            </Col>
          </Col>
          <Col span={16}>
            {data.map(function(ielem){
              return(
                <Col span={6}>
                  <div className={styles.textRight}>
                    <img src="../images/pro01.png" className={styles.imgSmall}/>
                    <span className={styles.imgDel}>—</span>
                  </div>
                </Col>  
              )})}
          </Col>
        </Row>
      </div>
      <div>上传3D图（可选）</div>
      <div>
        <Row>
        <Col span={8}>
            <Col span={8}>
              <div className={styles.imgUpload}>上传3D图</div>
            </Col>
            <Col span={16}>
              <div>请您上传格式为rar、zip的图包，文件大小为10M以内。</div>
            </Col>
          </Col>
          <Col span={16}>
            {data.map(function(ielem){
              return(
                <Col span={6}>
                  <div className={styles.textRight}>
                    <img src="../images/pro01.png" className={styles.imgSmall}/>
                    <span className={styles.imgDel}>—</span>
                  </div>
                </Col>  
            )})}
          </Col>
          <Col span={24}>
            <div className={styles.hr}/>
            <div className={styles.contant}>
              <div>
                设计师款
                <span className={styles.titSubName}>选择产品添加到我的店铺，可回到“我的店铺”发布上架！</span>
              </div>
              <div className={styles.tempDiv}>
                
              </div>
            </div>
          </Col>                                  
        </Row>
      </div>
    </div>
  );
};

DesUploadPro.propTypes = {

};


export default connect(({ desUploadPro }) => ({
  desUploadPro,
}))(DesUploadPro);
