import { Menu, Dropdown, Space, Avatar } from "antd";
import logo from '../../image/logo.png'
const Avater = () => {
  const menu = (
    <Menu
      items={[
        {
          label: <span>退出登录</span>,
        },
      ]}
    />
  );
  return (
    <>
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar
              size="large"
              src={logo}
            >
            </Avatar>
          </Space>
        </a>
      </Dropdown>
    </>
  );
};
export default Avater;
