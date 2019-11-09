import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

interface IBooProps {}

function Boo({ name }): React.FunctionComponentElement<IBooProps> {
  return <p>Hello {name}</p>;
}

interface IAppProps {}

function App(): React.FunctionComponentElement<IAppProps> {
  return (
    <main>
      <h1>Parcel Hot loading in Docker Container</h1>
      <Boo name='boop' />
    </main>
  );
}

export default hot(module)(App);
