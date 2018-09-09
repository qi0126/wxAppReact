import React from 'react';
import PropTypes from 'prop-types';
import styles from './batarHeader.less';

class batarHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.tabList[0].checked = true;
  }

  clickItem(item) {
    this.props.tabList.forEach((it) => {
      it.checked = false;
    });
    item.checked = true;
    this.setState({
      item,
    });

    this.props.changeSide(item);
  }

  render() {
    return (
      <div className={styles.headerWrap}>
        <div className={styles.headerCont}>
          <img src="@/../public/images/index/img-bitmap.png" width="90" height="60" />
          <div className={styles.headerTab}>
            {this.props.tabList.map((item) => {
              return <p className={item.checked && styles.on} key={item.name} onClick={() => { this.clickItem(item); }}>{item.name}</p>;
            })}
          </div>
        </div>
      </div>

    );
  }
}

batarHeader.propTypes = {
  tabList: PropTypes.array,
};

export default batarHeader;
