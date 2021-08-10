import { Row, Col, Avatar } from "antd";
import "./index.css";
import StartYellowSVG from "./SVG/StartYellowSVG";

const RightSideNav = () => {
  const users = [
    { name: "Jhon Sims", image: "user1.jpg" },
    { name: "Simone Gills", image: "user2.jpg" },
    { name: "Billy Reyes", image: "user3.jpg" },
    { name: "Jhon Sims", image: "user4.jpg" },
    { name: "Simone Gills", image: "user5.jpg" },
    { name: "Billy Reyes", image: "user6.jpg" },
  ];

  const recommendations = [
    {
      name: "Attack on Titan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum lorem, maximus at elit sed, pharetra euismod mauris. Proin finibus arcu nisl, vel sodales elit ultrices placerat. Nunc sed placerat turpis, volutpat aliquam ex. Maecenas eget justo ac ex gravida rhoncus et nec eros. Aliquam nisi dui, facilisis iaculis pretium eget, blandit ac lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut lacinia semper cursus. Nulla ac scelerisque risus. Ut ut felis lorem. In felis nibh, consequat ut sodales vitae, imperdiet in tellus. Duis tortor libero, placerat vitae aliquet vitae, vestibulum ac augue. Duis dapibus velit sagittis mattis blandit.",
      rating: [1, 2, 3],
      image: "AoT.jpg",
    },
    {
      name: "How I Met Your Mother",
      description:
        "Nunc pharetra, urna non accumsan aliquet, tortor nisl tincidunt sem, at tristique diam urna a ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu purus vitae odio dapibus commodo. Nulla ante lacus, laoreet a nibh vel, consectetur ornare purus. Phasellus a velit dignissim, tincidunt velit at, efficitur enim. Nunc ultrices est sit amet quam finibus, at varius lacus pulvinar. Nulla facilisis nibh in dolor dictum maximus. Sed tellus mi, scelerisque vel est sit amet, lacinia rutrum purus. Fusce diam diam, mollis ut tincidunt at, accumsan vel orci. Praesent interdum rutrum augue. Curabitur sit amet imperdiet eros. Suspendisse eu sapien non nulla aliquet blandit nec vitae turpis.",
      rating: [1, 2, 3, 4, 5],
      image: "HIMYM.jpg",
    },
    {
      name: "Horimiya",
      description:
        "Duis in ultricies urna. Etiam eros ipsum, eleifend ac venenatis eu, sollicitudin gravida dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla mi id nisl consectetur cursus. Vestibulum non eleifend sapien, et vulputate nunc. Donec vel libero rhoncus, aliquam lectus vel, ultricies ante. Donec rhoncus condimentum pellentesque. Morbi tincidunt neque diam, mattis euismod risus convallis sit amet. Integer ac fringilla ipsum, vel hendrerit neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis in ex vulputate, pretium massa non, finibus massa. Nulla et nisl sit amet nunc commodo interdum eu nec justo. Fusce mi lacus, ullamcorper nec diam sit amet, elementum lobortis quam.",
      rating: [1, 2, 3, 4],
      image: "Horimiya.png",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(255,255,255, 0.2)",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <div style={{ padding: "10px 20px" }}>
          <div>
            <p style={{ fontSize: "3vh" }}>Recommendations</p>
            {recommendations.map((recommendation) => (
              <div style={{ paddingBottom: "15px" }}>
                <Row gutter={[24, 24]}>
                  <Col md={16}>
                    <p className="rightnav-recommendation-margin rightnav-recommendation-title">
                      {recommendation.name}
                    </p>
                    <p className="rightnav-recommendation-margin rightnav-recommendation-paragraph">
                      {recommendation.description}
                    </p>
                    {recommendation.rating.map((rating) => (
                      <StartYellowSVG key={rating} />
                    ))}
                  </Col>
                  <Col md={8} style={{ placeSelf: "center" }}>
                    <Avatar
                      shape="square"
                      size={64}
                      src={
                        require(`../../Assets/Series/${recommendation.image}`)
                          .default
                      }
                    />
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgba(255,255,255, 0.2)",
          borderRadius: "10px",
        }}
      >
        <div style={{ padding: "10px 20px" }}>
          <p style={{ fontSize: "3vh" }}>Friends</p>
          <div style={{ textAlign: "center" }}>
            {users.map((user) => (
              <Avatar
                size={52}
                src={require(`../../Assets/Users/${user.image}`).default}
                style={{ margin: "5px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
