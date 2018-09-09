import React from 'react';
import styles from './Home.less';
import IndexSlide from '@/components/indexSlide/indexSlide';

console.log(IndexSlide);


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '@',
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.cont} />
            <div className={styles.left}>
              <p>账号登录</p>
              <p>申请合作/注册</p>
            </div>
          </div>

          <div className={styles.wrapContent}>
            <div className={styles.wcont}>
              <div className={styles.indexEZJ}>
                <img className={styles.slideImg} src="./images/img-ezjcont.png" width="654" height="288" alt="欢迎来到ezj" />
              </div>
              <img className={styles.slideImg} style={{ marginLeft: 16 }} src="./images/img-ewelry.png" alt="欢迎来到ezj" />
            </div>
            <div className={styles.wbottom}>
              <img className={styles.slideImg} src="./images/img-wbottom.png" alt="欢迎来到ezj" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}


Home.propTypes = {

};

export default Home;
