import React from "react";
import { Link } from "react-router-dom";

import { H2, P } from "../components/Text";
import SharedLayout from "../components/SharedLayout";
import { Row, Col } from "antd";

const FourOhFour: React.FC = () => {
  return (
    <SharedLayout title="Page Not Found">
      <Row>
        <Col>
          <div>
            <H2>Page Not Found</H2>
            <P>
              The page you attempted to load was not found. Please check the URL and
              try again, or visit{" "}
              <Link to="/">
                the homepage
              </Link>
            </P>
          </div>
        </Col>
      </Row>
    </SharedLayout>
  );
}

export default FourOhFour;
