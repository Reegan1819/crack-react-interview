import React from "react";

const AboutLIfeCycleMethod = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Lifecycle Methods</h1>
      React lifecycle methods are special methods in class components that allow
      you to run code at specific times during a component's lifecycle. The
      lifecycle of a React component can be broadly categorized into three
      phases:
      <ol>
        <li>
          <strong>Mounting:</strong>
          <br />
          Mounting is the phase in which a component is created and inserted
          into the DOM. It has the following methods:
        </li>
        <li>
          <strong>Updating:</strong>
          <br />
          Updating is the phase in which a component is updated in the DOM when
          its state or props change. It has the following methods:
        </li>
        <li>
          <strong>Unmounting:</strong>
          <br />
          Unmounting is the phase in which a component is removed from the DOM.
          It has the following method:
        </li>
      </ol>
      <h2> Mounting Phase</h2>
      <ol>
        <li>
          <strong>constructor():</strong>
          <br />
          <ul>
            <li>Called when the component is first created.</li>
            <li>Used to initialize state and bind event handlers.</li>
          </ul>
        </li>
        <li>
          <strong>static getDerivedStateFromProps(props, state)</strong>
          <br />
          <ul>
            <li>
              Called before rendering when new props or state are received.
            </li>
            <li>Used to update the state based on the props.</li>
          </ul>
        </li>
        <li>
          <strong>render():</strong>
          <br />
          <ul>
            <li>
              Called to render the component's UI based on its current state and
              props.
            </li>
            <li>Should be a pure function without side effects.</li>
          </ul>
        </li>
        <li>
          <strong>componentDidMount():</strong>
          <br />
          <ul>
            <li>Called after the component is rendered for the first time.</li>
            <li>Used to perform any DOM operations or data fetching.</li>
            <li>
              Ideal for making network requests, setting up subscriptions, or
              interacting with the DOM.
            </li>
          </ul>
        </li>
      </ol>
      <h2>Updating Phase</h2>
      <ol>
        <li>
          <strong>static getDerivedStateFromProps(props, state)</strong>
          <br />
          <ul>
            <li>
              Called before rendering when new props or state are received.
            </li>
            <li>Used to update the state based on the props.</li>
          </ul>
        </li>
        <li>
          <strong>shouldComponentUpdate(nextProps, nextState)</strong>
          <br />
          <ul>
            <li>
              Called before rendering when new props or state are received.
            </li>
            <li>Used to determine if the component should re-render or not.</li>
            <li>
              Should return true if the component should update, false
              otherwise.
            </li>
          </ul>
        </li>
        <li>
          <strong>render():</strong>
          <br />
          <ul>
            <li>
              Called to render the component's UI based on its current state and
              props.
            </li>
            <li>Should be a pure function without side effects.</li>
          </ul>
        </li>
        <li>
          <strong>getSnapshotBeforeUpdate(prevProps, prevState)</strong>
          <br />
          <ul>
            <li>
              Called right before the changes from the virtual DOM are to be
              reflected in the actual DOM.
            </li>
            <li>
              Used to capture some information from the DOM (e.g. scroll
              position) before it is potentially changed.
            </li>
          </ul>
        </li>
        <li>
          <strong>componentDidUpdate(prevProps, prevState, snapshot)</strong>
          <br />
          <ul>
            <li>Called after the component is updated in the DOM.</li>
            <li>
              Used to perform any DOM operations or data fetching based on the
              updated state or props.
            </li>
            <li>
              Ideal for updating the DOM in response to prop or state changes.
            </li>
          </ul>
        </li>
      </ol>
      <h2>Unmounting Phase</h2>
      <ol>
        <li>
          <strong>componentWillUnmount():</strong>
          <br />
          <ul>
            <li>Called before the component is removed from the DOM.</li>
            <li>
              Used to perform any cleanup (e.g. canceling network requests,
              removing event listeners).
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default AboutLIfeCycleMethod;
