import React, { useMemo, useState } from "react";
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

const matches = (item, term) =>
  [item.q, item.a, ...(item.points || []), item.code || ""]
    .join("\n")
    .toLowerCase()
    .includes(term);

const InterviewQuestions = () => {
  const [allOpen, setAllOpen] = useState(false);
  const [search, setSearch] = useState("");

  // keep each section's original index so the #section-N anchors stay stable
  const visibleSections = useMemo(() => {
    const term = search.trim().toLowerCase();
    return questions
      .map((section, index) => ({
        ...section,
        index,
        items: term
          ? section.items.filter((item) => matches(item, term))
          : section.items,
      }))
      .filter((section) => section.items.length > 0);
  }, [search]);

  const matchCount = visibleSections.reduce((n, s) => n + s.items.length, 0);

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/crack-react-interview">Home</Link>
      <h1>React and JavaScript Interview Questions</h1>
      <p>
        Questions from a customer interview round (Cisco), with answers and
        examples. Search by question or keyword, then click a question to see
        the answer. Live demos are rendered
        under the answer, and their source is in{" "}
        <code>src/Components/InterviewQuestions/Examples</code>. See also{" "}
        <Link to={ABOUT_REACT}>About React</Link>.
      </p>
      <input
        type="search"
        placeholder="Search questions"
        aria-label="Search questions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "6px", width: "320px", marginRight: "8px" }}
      />
      <button onClick={() => setAllOpen((open) => !open)}>
        {allOpen ? "Collapse all" : "Expand all"}
      </button>
      {search.trim() && (
        <p>
          {matchCount} matching question{matchCount === 1 ? "" : "s"}
        </p>
      )}

      {matchCount === 0 && <p>No matching questions found</p>}

      {matchCount > 0 && (
        <>
          <h2>Contents</h2>
          <ul>
            {visibleSections.map((section) => (
              <li key={section.title}>
                <a href={"#section-" + section.index}>{section.title}</a>
              </li>
            ))}
          </ul>
        </>
      )}

      {visibleSections.map((section) => (
        <section key={section.title} id={"section-" + section.index}>
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
