import { fireEvent, render, screen } from "@testing-library/react";
import EmployeeSearch from "./EmployeeSearch";

const search = (text) =>
  fireEvent.change(screen.getByPlaceholderText("Search employees"), {
    target: { value: text },
  });

describe("EmployeeSearch", () => {
  test("shows all employees initially", () => {
    render(<EmployeeSearch />);
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  test("filters by name or role as the user types", () => {
    render(<EmployeeSearch />);
    search("engineer");
    // "Engineer" (Asha) and "QA Engineer" (John)
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  test("shows a message when nothing matches", () => {
    render(<EmployeeSearch />);
    search("zzz");
    expect(screen.getByText("No matching employees found")).toBeInTheDocument();
  });

  test("shows all employees again when the search is cleared", () => {
    render(<EmployeeSearch />);
    search("zzz");
    search("");
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });
});
