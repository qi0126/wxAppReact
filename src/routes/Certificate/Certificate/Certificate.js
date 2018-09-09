import React from 'react';
import { connect } from 'dva';
import { Input, Button } from 'antd';

import styles from './Certificate.less';

class Certificate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className={styles.certificate} >
          <div className={styles.sAudit}>
            <div className={styles.top}>
              <div className={styles.tit}>钻石证书查询</div>
            </div>

            <div className={styles.twoWrap}>
              <div className={styles.twoTit} >选择证书类型</div>
              <div className={styles.tList}>
                <p className={styles.on}>GIA证书查询</p>
                <p>AGS证书查询</p>
                <p>AIGS证书查询</p>
                <p>CGL证书查询</p>
                <p>NGTC(国检)证书</p>
              </div>
            </div>

            <div className={styles.query}>
              <div className={`${styles.twoWrap} ${styles.queryLeft}`}>
                <div className={styles.twoTit} >
                选择证书类型
                <span>美国珠宝学院认证,业内最权威的证书所有权归官网所有</span>
                </div>

                <div className={styles.tInfo}>
                  <div> <Input placeholder="请输入证书号" /> </div>
                  <div><Button type="primary">查询</Button></div>
                  <div><Button type="primary">重置</Button></div>
                </div>
              </div>
              <div className={styles.queryRight}>
                <div className={styles.rTit}>
                查询记录
              </div>
                <div className={styles.rInfo}>
                  <p>GIA 1172967693</p>
                  <p>GIA 1172967693</p>
                  <p>GIA 1172967693</p>
                  <p>GIA 1172967693</p>
                  <p>GIA 1172967693</p>
                  <p>GIA 1172967693</p>
                  <p>GIA 1172967693</p>
                  <p>GIA 1172967693</p>
                  <p>GIA 1172967693</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: '20px', background: '#f8f8f8' }} />
        <div className={styles.certificate}>
          <div className={styles.result}>
            <div className={styles.row} style={{ marginBottom: '20px' }}>
              <p className={styles.rowTit}>搜索结果</p>
              <p className={styles.rowInfo}>
                <div className={styles.riInfo}>
                  <span className={styles.riLeft}>GIA证书编号</span>
                  <span className={styles.riRight}>1172967693</span>
                </div>
                <div className={styles.riInfo}>
                  <span className={styles.riLeft}>颁发日期</span>
                  <span className={styles.riRight}>2016/10/20</span>
                </div>
                <span><a href="" style={{ color: '#EF5555' }}>下载PDF文件</a></span>
              </p>
            </div>
            <div className={styles.row}>
              <p className={styles.rowTit}>GIA钻石分级证书</p>
              <p className={styles.rowInfo}>
                <span>Round 1.30ct I VVS1 EX EX EX N</span>
              </p>
            </div>
          </div>
          <div className={styles.rowHr} />
          <div className={styles.specWrap}>
            <div className={styles.specTit}>圆形钻</div>
            <div className={styles.stInfo}>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>尺寸</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>切工</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>克重</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>抛光</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>颜色</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>对称</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>净重</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>荧光</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
            </div>
          </div>
          <div className={styles.rowHr} />
          <div className={styles.specWrap}>
            <div className={styles.specTit}>比例</div>
            <div className={styles.stInfo}>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>比例</p>
                <p className={styles.stlRight}> 全深比</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>亭角</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>台宽比</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>亭深比</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>冠角</p>
                <p className={styles.stlRight}> 全深比 台宽比 冠角 冠高比 </p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>星小面比</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>冠高比</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>下腰小面比</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>比例</p>
                <p className={styles.stlRight}> 全深比 台宽比 冠角 冠高比 </p>
              </div>
              <div className={styles.stList}>
                <p className={styles.stlLeft}>底尖</p>
                <p className={styles.stlRight}>6.95 - 6.99 x 4.31 mm</p>
              </div>

            </div>
          </div>
          <div className={styles.rowHr} />

        </div>

      </div>
    );
  }
}

Certificate.propTypes = {

};

export default connect(({ certificate }) => ({
  certificate,
}))(Certificate);
