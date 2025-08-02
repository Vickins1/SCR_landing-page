export interface PricingTier {
  range: number[];
  fee: number | string;
}

export interface UnitType {
  type: string;
  pricing: {
    RentCollection: PricingTier[];
    FullManagement: string;
  };
}

export const UnitType: UnitType[] = [
  {
    type: "Single",
    pricing: {
      RentCollection: [
        { range: [5, 20], fee: 2500 },
        { range: [21, 50], fee: 5000 },
        { range: [51, 100], fee: 8000 },
        { range: [101, Infinity], fee: "Contact us for Pricing" },
      ],
      FullManagement: "Contact us for Pricing",
    },
  },
  {
    type: "Studio",
    pricing: {
      RentCollection: [
        { range: [5, 20], fee: 2500 },
        { range: [21, 50], fee: 5000 },
        { range: [51, 100], fee: 8000 },
        { range: [101, Infinity], fee: "Contact us for Pricing" },
      ],
      FullManagement: "Contact us for Pricing",
    },
  },
  {
    type: "1-Bedroom",
    pricing: {
      RentCollection: [
        { range: [1, 15], fee: 5000 },
        { range: [16, 25], fee: 8000 },
        { range: [26, Infinity], fee: "Contact us for Pricing" },
      ],
      FullManagement: "Contact us for Pricing",
    },
  },
  {
    type: "2-Bedroom",
    pricing: {
      RentCollection: [
        { range: [1, 15], fee: 5000 },
        { range: [16, 25], fee: 8000 },
        { range: [26, Infinity], fee: "Contact us for Pricing" },
      ],
      FullManagement: "Contact us for Pricing",
    },
  },
  {
    type: "3-Bedroom",
    pricing: {
      RentCollection: [
        { range: [1, 15], fee: 5000 },
        { range: [16, 25], fee: 8000 },
        { range: [26, Infinity], fee: "Contact us for Pricing" },
      ],
      FullManagement: "Contact us for Pricing",
    },
  },
  {
    type: "Duplex",
    pricing: {
      RentCollection: [
        { range: [1, 15], fee: 5000 },
        { range: [16, 25], fee: 8000 },
        { range: [26, Infinity], fee: "Contact us for Pricing" },
      ],
      FullManagement: "Contact us for Pricing",
    },
  },
  {
    type: "Commercial",
    pricing: {
      RentCollection: [
        { range: [1, 15], fee: 5000 },
        { range: [16, 25], fee: 8000 },
        { range: [26, Infinity], fee: "Contact us for Pricing" },
      ],
      FullManagement: "Contact us for Pricing",
    },
  },
];

export function getManagementFee(unit: {
  type: string;
  managementType: "RentCollection" | "FullManagement";
  quantity: number;
}): number | string {
  const unitType = UnitType.find((ut) => ut.type === unit.type);
  if (!unitType) return "Invalid unit type";

  const pricing = unitType.pricing[unit.managementType];
  if (typeof pricing === "string") return pricing;

  for (const tier of pricing) {
    const [min, max] = tier.range;
    if (unit.quantity >= min && unit.quantity <= max) {
      return tier.fee;
    }
  }
  return "Contact us for Pricing";
}