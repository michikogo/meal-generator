import React from "react";
import { Row, Col } from "antd";

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
      {menu.map((items, index) => (
        <Row key={index} gutter={(12, 12)}>
          <Col>{items.icon}</Col>
          <Col>
            <p style={{ fontSize: "x-large" }}>{items.name}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default LeftSideNav;
