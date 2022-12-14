import classNames from 'classnames/bind';
import { faCircleCheck, faCircleDollarToSlot, faClipboardList, faHistory } from '@fortawesome/free-solid-svg-icons';

import styles from './SideBar.module.scss';
import Menu from './Menu';
import config from 'src/config';
import MenuItem from './Menu/MenuItems';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu title="Sản phẩm">
        <MenuItem icon={faClipboardList} title="Danh sách sản phẩm" link={config.routes.showProduct} />
        <MenuItem icon={faCircleCheck} title="Sản phẩm cho bạn" link={config.routes.login} />
      </Menu>

      <Menu title="Đơn hàng của bạn">
        <MenuItem icon={faCircleDollarToSlot} title="Đơn hàng hiện tại" link={config.routes.login} />
        <MenuItem icon={faHistory} title="Lịch sử mua hàng" link={config.routes.login} />
      </Menu>
    </aside>
  );
}
export default Sidebar;
