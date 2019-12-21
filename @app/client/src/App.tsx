import logo from "./logo.svg";
import "./App.less";
import React from "react";
import { Button, Typography } from "antd";
const { Text, Paragraph } = Typography;

const App: React.FC = () => {
  return (
    <div className="App">
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
          <Button type="primary" block href="https://reactjs.org">
          Learn React
          </Button>
        </Paragraph>

      </header>
    </div>
  );
}

export default App;
