import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import InterviewQuestions from "./InterviewQuestions";
import questions from "./questions";

const renderPage = () =>
  render(
    <MemoryRouter>
      <InterviewQuestions />
    </MemoryRouter>
  );

describe("InterviewQuestions", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    );
  });

  test("renders every section and question without calling the API", () => {
    renderPage();
    questions.forEach((section) => {
      // each title appears in the contents list and as the section heading
      expect(screen.getAllByText(section.title).length).toBeGreaterThan(0);
      section.items.forEach((item) =>
        expect(screen.getByText(item.q)).toBeInTheDocument()
      );
    });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test("expand all and the live demos work", async () => {
    renderPage();
    fireEvent.click(screen.getByText("Expand all"));
    expect(screen.getByText("Collapse all")).toBeInTheDocument();

    screen
      .getAllByText("Show live demo")
      .forEach((button) => fireEvent.click(button));

    expect(screen.getByPlaceholderText("Search employees")).toBeInTheDocument();
    // wait for the useFetch demo to finish loading
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test("search filters questions, shows an empty state and restores all", () => {
    renderPage();
    const box = screen.getByPlaceholderText("Search questions");
    const total = questions.flatMap((s) => s.items).length;

    fireEvent.change(box, { target: { value: "CLOSURE" } });
    expect(screen.getByText("What is a Closure?")).toBeInTheDocument();
    expect(screen.queryByText("What are keys in React lists?")).toBeNull();

    fireEvent.change(box, { target: { value: "zzzz-no-such-thing" } });
    expect(screen.getByText("No matching questions found")).toBeInTheDocument();

    fireEvent.change(box, { target: { value: "" } });
    expect(screen.getByText("What are keys in React lists?")).toBeInTheDocument();
    expect(screen.getAllByRole("group")).toHaveLength(total);
  });

  test("section titles and questions are unique", () => {
    const titles = questions.map((s) => s.title);
    const qs = questions.flatMap((s) => s.items.map((i) => i.q));
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(qs).size).toBe(qs.length);
  });
});
