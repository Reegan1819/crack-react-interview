import React, { useState } from "react";
import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import questions from "./questions";
import { ABOUT_REACT } from "../Routers/RouteEndpoints";

const LiveDemo = ({ Demo }) => {
  const [show, setShow] = useState(false);

  // mounted only on demand so closed answers never run effects or fetch data
  return (
    <div
      style={{
        border: "1px dashed #999",
        padding: "12px",
        marginTop: "8px",
      }}
    >
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide live demo" : "Show live demo"}
      </button>
      {show && <Demo />}
    </div>
  );
};

const InterviewQuestions = () => {
  const [allOpen, setAllOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/crack-react-interview">Home</Link>
      <h1>React and JavaScript Interview Questions</h1>
      <p>
        Questions from a customer interview round (Cisco), with answers and
        examples. Click a question to see the answer. Live demos are rendered
        under the answer, and their source is in{" "}
        <code>src/Components/InterviewQuestions/Examples</code>. See also{" "}
        <Link to={ABOUT_REACT}>About React</Link>.
      </p>
      <button onClick={() => setAllOpen((open) => !open)}>
        {allOpen ? "Collapse all" : "Expand all"}
      </button>

      <h2>Contents</h2>
      <ul>
        {questions.map((section, i) => (
          <li key={section.title}>
            <a href={"#section-" + i}>{section.title}</a>
          </li>
        ))}
      </ul>

      {questions.map((section, i) => (
        <section key={section.title} id={"section-" + i}>
          <h2>{section.title}</h2>
          {section.items.map((item) => {
            const Demo = item.demo;
            return (
              <details
                key={allOpen + item.q}
                open={allOpen}
                style={{ marginBottom: "12px" }}
              >
                <summary style={{ cursor: "pointer", fontWeight: "bold" }}>
                  {item.q}
                </summary>
                <p>{item.a}</p>
                {item.points && (
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {item.code && <CodeBlock>{item.code}</CodeBlock>}
                {Demo && <LiveDemo Demo={Demo} />}
              </details>
            );
          })}
        </section>
      ))}
    </div>
  );
};

export default InterviewQuestions;
