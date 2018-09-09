import React from 'react';
import PropTypes from 'prop-types';
import styles from './batarHeaderTop.less';

const batarHeaderTop = ({ products }) => {
    return (
        <div className={styles.headerTopWrap}>
            <div className={styles.headerTopCont}>
                <p className={styles.htAccount}>帐号
                <span>1312989080
                    <span>></span>
                    </span>
                </p>
                <p className={styles.htMessage}>消息
            </p>
                <p className={styles.htLg}>中文
                <span>></span>
                </p>
            </div>
        </div>
    );
};

batarHeaderTop.propTypes = {
    // products: PropTypes.array.isRequired,
};

export default batarHeaderTop;
