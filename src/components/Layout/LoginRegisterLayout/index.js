import classNames from 'classnames/bind';
import Header from './Header';
import styles from './LoginRegisterLayout.module.scss';

const cx = classNames.bind(styles);

function LoginRegisterLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('introduce')}>
          <h1>Bán hàng chuyên nghiệp</h1>
          <h3>Online Shop - Kênh Người Mua</h3>
          <div className={cx('image')}></div>
        </div>

        <div className={cx('empty')}></div>

        <div className={cx('form')}>{children}</div>
      </div>
    </div>
  );
}

export default LoginRegisterLayout;
