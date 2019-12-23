import logo from "../logo.svg";

import React from "react";
import { Button, Typography } from "antd";
const { Text, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Paragraph>
        Edit <Text code>src/App.tsx</Text> and save to reload.
      </Paragraph>
      <Paragraph>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Paragraph>
      <Paragraph>
        <Button type="primary" block href={process.env.ROOT_URL}>
          Home
        </Button>
      </Paragraph>
    </header>
  )
}

export default Home;
