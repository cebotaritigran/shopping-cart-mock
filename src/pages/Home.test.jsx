import { React } from "react";
import {
    render,
    screen,

} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from 'vitest'


import { HomePage } from "./Home";

describe("Testing Home page", () => {
    it("should have heading", () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>

        );
        expect(screen.getByText(/your essential style,/i)).toBeInTheDocument();
    })
    it("should render welcome text", () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )

        expect(
            screen.getByText(/welcome to/i)
        ).toBeInTheDocument()
    })
    it("should render explore collection button", () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )

        const button = screen.getByRole("button", {
            name: /explore the collection/i
        })

        expect(button).toBeInTheDocument()
    })
    it("should render tagline", () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )

        expect(
            screen.getByText(/discover pieces that matter/i)
        ).toBeInTheDocument()
    })

})