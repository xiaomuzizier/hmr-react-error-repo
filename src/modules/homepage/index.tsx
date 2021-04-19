import React from 'react';
import { Row, Button } from 'antd';
import { SOLOGAN, PLATFORM_DESC } from './constants';

import './index.less';
import banner from '../../assets/logo/banner-min.jpg';
import RoomSvg from '../../assets/svg/room.svg';

import Icon, { QuestionCircleOutlined } from '@ant-design/icons';

export default class HomePage extends React.Component {
  renderBanner = () => (
    <Row>
      <div
        className="home-banner"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
        }}
      >
        <h1 className="home-banner-sologan">{SOLOGAN} </h1>
        <p className="home-banner-desc">{PLATFORM_DESC}</p>

        <div className="home-banner-help-wrapper">
          <p className="home-banner-help-text">
            <QuestionCircleOutlined /> 我无法显示?
          </p>
          <Button
            href={'https://www.baidu/com'}
            className="home-banner-help-btn"
          >
            <Icon component={RoomSvg} style={{ marginRight: '5px' }} />
          </Button>
        </div>
      </div>
    </Row>
  );

  renderBlockTitle = (title: string, link: string) => (
    <Row
      align="middle"
      justify="space-between"
      style={{ marginTop: '30px', marginBottom: '20px' }}
    >
      <h2 className="home-block-title">{title}</h2>
      <a
        className="home-block-link"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        更多功能介绍 ▶︎
      </a>
    </Row>
  );

  renderCopyright = () => (
    <Row justify="center" style={{ marginTop: '50px' }}>
      <p className="home-copyright">©️ hhhhhh</p>
    </Row>
  );

  render = () => (
    <div className="home-wrapper">
      <div className="home-container">
        {/* Banner渲染 */}
        {this.renderBanner()}
        {/* 模块展示 */}
        {/* 版权声明 */}
        {this.renderCopyright()}
      </div>
    </div>
  );
}
