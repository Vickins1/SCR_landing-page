"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import { getManagementFee, UnitType } from "@/lib/pricingUtils";
import "./page.css";

export default function Pricing() {
  const [selectedUnitType, setSelectedUnitType] = useState<string>(UnitType[0].type);
  const [quantity, setQuantity] = useState<number>(1);
  const [managementType, setManagementType] = useState<"RentCollection" | "FullManagement">("RentCollection");
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleUnitTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUnitType(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity(1);
    } else {
      const parsed = parseInt(value);
      if (!isNaN(parsed) && parsed >= 1) {
        setQuantity(parsed);
      }
    }
  };

  const handleQuantityIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      handleQuantityIncrement();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      handleQuantityDecrement();
    }
  };

  const handleManagementTypeChange = (type: "RentCollection" | "FullManagement") => {
    setManagementType(type);
  };

  const handleGetStarted = () => {
    router.push("https://app.smartchoicerentalmanagement.com/sign-up");
  };

  const fee = getManagementFee({ type: selectedUnitType, managementType, quantity });

  return (
    <div className="content">
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1 className="pricing-title">Elevate Your Property Management</h1>
          <p className="pricing-subtitle">
            Streamlined pricing plans crafted for seamless property management solutions.
          </p>
          <button type="button" className="hero-cta-button" onClick={handleGetStarted}>
          Get Started Now
          </button>
        </div>
      </section>

      <section className="pricing-container">
        <div className="pricing-calculator">
          <h2>Calculate Your Management Fees</h2>
          <div className="calculator-grid">
            <div className="input-group">
              <label className="input-label" htmlFor="unit-type">
                Unit Type
              </label>
              <select
                id="unit-type"
                value={selectedUnitType}
                onChange={handleUnitTypeChange}
                className="input-field"
                aria-label="Select unit type"
              >
                {UnitType.map((unit) => (
                  <option key={unit.type} value={unit.type}>
                    {unit.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="quantity">
                Number of Units
              </label>
              <div className="quantity-input-container">
                <button
                  type="button"
                  onClick={handleQuantityDecrement}
                  className="quantity-button"
                  aria-label="Decrease number of units"
                  disabled={quantity <= 1}
                >
                  <Minus className="icon" />
                </button>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  onKeyDown={handleQuantityKeyDown}
                  min="1"
                  className="quantity-input"
                  aria-label="Enter number of units"
                />
                <button
                  type="button"
                  onClick={handleQuantityIncrement}
                  className="quantity-button"
                  aria-label="Increase number of units"
                >
                  <Plus className="icon" />
                </button>
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Management Type</label>
              <div className="management-type-buttons">
                <button
                  type="button"
                  onClick={() => handleManagementTypeChange("RentCollection")}
                  className={`management-button ${managementType === "RentCollection" ? "active" : ""}`}
                  aria-pressed={managementType === "RentCollection"}
                >
                  Rent Collection
                </button>
                <button
                  type="button"
                  onClick={() => handleManagementTypeChange("FullManagement")}
                  className={`management-button ${managementType === "FullManagement" ? "active" : ""}`}
                  aria-pressed={managementType === "FullManagement"}
                >
                  Full Management
                </button>
              </div>
            </div>
          </div>
          <div className="fee-display">
            <p className="fee-amount">
              {typeof fee === "number" ? `KSH ${fee.toLocaleString()}/month` : fee}
            </p>
            <button type="button" className="get-started-button" onClick={handleGetStarted}>
              Get Started Now
            </button>
          </div>
        </div>

        <div className="pricing-comparison">
          <button
            type="button"
            onClick={() => setIsComparisonOpen(!isComparisonOpen)}
            className="comparison-toggle"
            aria-expanded={isComparisonOpen}
            aria-controls="pricing-comparison-table"
          >
            Pricing Comparison
            {isComparisonOpen ? (
              <ChevronUp className="icon" aria-hidden="true" />
            ) : (
              <ChevronDown className="icon" aria-hidden="true" />
            )}
          </button>
          {isComparisonOpen && (
            <div className="table-container">
              <table id="pricing-comparison-table" className="comparison-table">
                <thead>
                  <tr>
                    <th scope="col">Unit Type</th>
                    <th scope="col">Rent Collection (5-20 units)</th>
                    <th scope="col">Rent Collection (21-50 units)</th>
                    <th scope="col">Rent Collection (50-100 units)</th>
                    <th scope="col">Full Management</th>
                  </tr>
                </thead>
                <tbody>
                  {UnitType.map((unit) => (
                    <tr key={unit.type}>
                      <td>{unit.type}</td>
                      <td>
                        {unit.pricing.RentCollection[0]?.fee
                          ? typeof unit.pricing.RentCollection[0].fee === "number"
                            ? `KSH ${unit.pricing.RentCollection[0].fee.toLocaleString()}`
                            : unit.pricing.RentCollection[0].fee
                          : "N/A"}
                      </td>
                      <td>
                        {unit.pricing.RentCollection[1]?.fee
                          ? typeof unit.pricing.RentCollection[1].fee === "number"
                            ? `KSH ${unit.pricing.RentCollection[1].fee.toLocaleString()}`
                            : unit.pricing.RentCollection[1].fee
                          : "N/A"}
                      </td>
                      <td>
                        {unit.pricing.RentCollection[2]?.fee
                          ? typeof unit.pricing.RentCollection[2].fee === "number"
                            ? `KSH ${unit.pricing.RentCollection[2].fee.toLocaleString()}`
                            : unit.pricing.RentCollection[2].fee
                          : "Contact us for Pricing"}
                      </td>
                      <td>{unit.pricing.FullManagement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}