import React from "react";
import LeftSideNav from "./Components/LeftSideNav/LeftSideNav";
import Feed from "./Components/Feed/Feed";
import RightSideNav from "./Components/RightSideNav/RightSideNav";

import { Layout, Row, Col, Input } from "antd";
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const App = () => {
  const onSearch = (value) => console.log(value);

  return (
    <Layout>
      <Header>
        <Row gutter={[36, 36]}>
          <Col xs={5} md={6}>
            <div>Movie Rater</div>
          </Col>
          <Col md={12}>
            <div>Nav Title</div>
          </Col>
          <Col md={6}>
            <div>
              <Search
                style={{ padding: "16px 0px" }}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                // size="large"
                onSearch={onSearch}
              />
            </div>
          </Col>
        </Row>
      </Header>
      <Content>
        <div
          style={{
            padding: "0px 50px",
            minHeight: "81vh",
            backgroundColor: "#001529",
          }}
        >
          <Row gutter={[36, 36]}>
            <Col md={6}>
              <LeftSideNav />
            </Col>
            <Col
              md={12}
              style={{
                minHeight: "81vh",
                borderWidth: "0.5px",
                borderStyle: "solid",
                borderColor: "grey",
              }}
            >
              <Feed />
            </Col>
            <Col md={6}>
              <RightSideNav />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center", backgroundColor: "#001529" }}>
        <div>Ant Design ©2018 Created by Ant UED</div>
      </Footer>
    </Layout>
  );
};

export default App;
