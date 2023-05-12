import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactFormPopup from "./ContactFormPopup";
import "@testing-library/jest-dom/extend-expect"; // Додано імпорт

describe("ContactFormPopup", () => {
  test("renders contact form", () => {
    render(<ContactFormPopup />);

    // Перевірка, чи відображається форма зворотного зв'язку
    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Message:");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("submits form data", () => {
    render(<ContactFormPopup />);

    // Заповнення полів форми
    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Message:");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello, this is a test message." } });

    // Відправлення форми
    fireEvent.click(submitButton);

    // Перевірка, що дані форми були успішно відправлені
    expect(screen.getByText("Form submitted!")).toBeInTheDocument();
  });
});
