import React from "react";
import { Row, Col, Avatar } from "antd";

import ExploreSVG from "./SVG/ExploreSVG";
import HomeSVG from "./SVG/HomeSVG";
import BookmarkSVG from "./SVG/BookmarkSVG";
import NotificationsSVG from "./SVG/NotificationsSVG";
import ProfileSVG from "./SVG/ProfileSVG";
import MessagesSVG from "./SVG/MessagesSVG";

const LeftSideNav = () => {
  const menu = [
    { name: "Home", icon: <HomeSVG /> },
    { name: "Explore", icon: <ExploreSVG /> },
    { name: "Notifications", icon: <NotificationsSVG /> },
    { name: "Messages", icon: <MessagesSVG /> },
    { name: "Bookmarks", icon: <BookmarkSVG /> },
    { name: "Profile", icon: <ProfileSVG /> },
  ];

  return (
    <div>
      <Row style={{ padding: "0px 0px 25px 0px" }}>
        <Col md={8}>
          <Avatar
            size={72}
            src={require(`../../Assets/Users/myDP.jpg`).default}
            style={{ margin: "5px" }}
          />
        </Col>
        <Col md={16}>
          <div style={{ fontSize: "3vh" }}>Michiko Go</div>
          <div>Currently Watching:</div>
          <div>Series Watching</div>
        </Col>
      </Row>
      {menu.map((items, index) => (
        <Row key={index} gutter={[12, 12]}>
          <Col>{items.icon}</Col>
          <Col>
            <p style={{ fontSize: "3vh" }}>{items.name}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default LeftSideNav;
