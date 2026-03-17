// src/pages/Shop.test.jsx
import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { describe, expect, test, vi } from "vitest"
import * as router from "react-router"

import { ShopPage } from "./Shop"

// Mock products
const mockProducts = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    quantity: 1,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    quantity: 1,
  },
]

// Mock useOutletContext with real useState so clicks actually update
vi.spyOn(router, "useOutletContext").mockImplementation(() => {
  const [products, setProducts] = React.useState(mockProducts)
  const [cart, setCart] = React.useState([])
  return { cart, setCart, products, setProducts }
})

// Helper to render ShopPage
const renderPage = () =>
  render(
    <MemoryRouter>
      <ShopPage />
    </MemoryRouter>
  )

describe("Shop Page", () => {
  test("renders products", async () => {
    renderPage()

    expect(await screen.findByText(/fjallraven/i)).toBeInTheDocument()
    expect(await screen.findByText(/mens casual premium/i)).toBeInTheDocument()
  })

  test("renders product prices", async () => {
    renderPage()

    expect(await screen.findByText(/\$109.95/)).toBeInTheDocument()
    expect(await screen.findByText(/\$22.3/)).toBeInTheDocument()
  })

  test("renders add buttons", async () => {
    renderPage()

    const buttons = await screen.findAllByRole("button", { name: /add/i })
    expect(buttons.length).toBeGreaterThan(0)
  })

  test("quantity increases when + clicked", async () => {
    renderPage()

    const plusButtons = await screen.findAllByText("+")
    const inputBefore = await screen.findAllByDisplayValue("1")

    fireEvent.click(plusButtons[0])

    // After click, quantity should be 2
    const inputAfter = await screen.findByDisplayValue("2")
    expect(inputAfter).toBeInTheDocument()
    expect(inputBefore[0]).toBeInTheDocument()
  })

  // test("quantity decreases when - clicked", async () => {
  //   renderPage()

  //   const minusButtons = await screen.findAllByText("-")

  //   // Click + first to make it 2, so we can decrease back to 1
  //   const plusButtons = await screen.findAllByText("+")
  //   fireEvent.click(plusButtons[0])
  //   expect(await screen.findByDisplayValue("2")).toBeInTheDocument()

  //   fireEvent.click(minusButtons[0])
  //   const inputAfter = await screen.findByDisplayValue("1")
  //   expect(inputAfter).toBeInTheDocument()
  // })
})