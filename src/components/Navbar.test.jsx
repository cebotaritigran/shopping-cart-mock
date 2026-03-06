import { React } from "react";
import {
    render,
    screen,

} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from 'vitest'
import { Navbar } from "./Navbar"
import { App } from "../App";

describe("Testing Navbar Component", () => {
    it("should have logo", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/mock/i)).toBeInTheDocument();

    })

    it("should show 3 routes", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        const listRoutes = screen.getAllByRole('link');
        expect(listRoutes.length).toEqual(3);
    })

    it("should show 3 routes and they should corespond to correct routes", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        const listRoutes = screen.getAllByRole('link');
        expect(listRoutes.length).toEqual(3);
    })

})