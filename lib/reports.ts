export type Report = {
  name: string;
  file: string;
};

/*
 * Reports offered on the site, keyed by the slug the form submits.
 * Each file lives in public/reports.
 */
export const REPORTS: Record<string, Report> = {
  "5-plus-unit-residential": {
    name: "5+ Unit Residential Report",
    file: "5-plus-unit-residential-report.pdf",
  },
  "affordable-community-development": {
    name: "Affordable Community Development Guide",
    file: "affordable-community-development-guide.pdf",
  },
  "agricultural-financing": {
    name: "Agricultural Financing Report",
    file: "agricultural-financing-report.pdf",
  },
  "assisted-living-financing": {
    name: "Assisted Living Financing Report",
    file: "assisted-living-financing-report.pdf",
  },
  "auto-dealership-financing": {
    name: "Auto Dealership Financing Report",
    file: "auto-dealership-financing-report.pdf",
  },
  "auto-repair-financing": {
    name: "Auto Repair Financing Report",
    file: "auto-repair-financing-report.pdf",
  },
  "bridge-loans": {
    name: "Bridge Loans Report",
    file: "bridge-loans-report.pdf",
  },
  "bridge-value-add-loans": {
    name: "Bridge Value-Add Loans Guide",
    file: "bridge-value-add-loans-guide.pdf",
  },
  "business-lines-of-credit": {
    name: "Business Lines of Credit Guide",
    file: "business-lines-of-credit-guide.pdf",
  },
  "cannabis-financing": {
    name: "Cannabis Financing Report",
    file: "cannabis-financing-report.pdf",
  },
  "car-wash-financing": {
    name: "Car Wash Financing Report",
    file: "car-wash-financing-report.pdf",
  },
  "cmbs-loans": {
    name: "CMBS Loans Guide",
    file: "cmbs-loans-guide.pdf",
  },
  "commercial-bridge-loans": {
    name: "Commercial Bridge Loans Guide",
    file: "commercial-bridge-loans-guide.pdf",
  },
  "condominium-financing": {
    name: "Condominium Financing Report",
    file: "condominium-financing-report.pdf",
  },
  "construction-loans": {
    name: "Construction Loans Guide",
    file: "construction-loans-guide.pdf",
  },
  "data-center-financing": {
    name: "Data Center Financing Report",
    file: "data-center-financing-report.pdf",
  },
  "daycare-financing": {
    name: "Daycare Financing Report",
    file: "daycare-financing-report.pdf",
  },
  "dental-office-financing": {
    name: "Dental Office Financing Report",
    file: "dental-office-financing-report.pdf",
  },
  "distressed-special-situation-loans": {
    name: "Distressed & Special Situation Loans Guide",
    file: "distressed-special-situation-loans-guide.pdf",
  },
  "dscr-loans": {
    name: "DSCR Loans Guide",
    file: "dscr-loans-guide.pdf",
  },
  "event-venue-financing": {
    name: "Event Venue Financing Report",
    file: "event-venue-financing-report.pdf",
  },
  "fannie-mae-freddie-mac": {
    name: "Fannie Mae & Freddie Mac Guide",
    file: "fannie-mae-freddie-mac-guide.pdf",
  },
  "fix-and-flip": {
    name: "Fix and Flip Report",
    file: "fix-and-flip-report.pdf",
  },
  "funeral-home-financing": {
    name: "Funeral Home Financing Report",
    file: "funeral-home-financing-report.pdf",
  },
  "gas-station-financing": {
    name: "Gas Station Financing Report",
    file: "gas-station-financing-report.pdf",
  },
  "golf-course-financing": {
    name: "Golf Course Financing Report",
    file: "golf-course-financing-report.pdf",
  },
  "green-energy-financing": {
    name: "Green Energy Financing Guide",
    file: "green-energy-financing-guide.pdf",
  },
  "ground-up-construction": {
    name: "Ground-Up Construction Report",
    file: "ground-up-construction-report.pdf",
  },
  "hotel-financing": {
    name: "Hotel Financing Report",
    file: "hotel-financing-report.pdf",
  },
  "hud-223f": {
    name: "HUD 223(f) Guide",
    file: "hud-223f-guide.pdf",
  },
  "investment-property": {
    name: "Investment Property Report",
    file: "investment-property-report.pdf",
  },
  "land-financing": {
    name: "Land Financing Report",
    file: "land-financing-report.pdf",
  },
  "laundromat-financing": {
    name: "Laundromat Financing Report",
    file: "laundromat-financing-report.pdf",
  },
  "light-industrial-warehouse": {
    name: "Light Industrial Warehouse Report",
    file: "light-industrial-warehouse-report.pdf",
  },
  "long-term-commercial-mortgages": {
    name: "Long-Term Commercial Mortgages Report",
    file: "long-term-commercial-mortgages-report.pdf",
  },
  "manufacturing-financing": {
    name: "Manufacturing Financing Report",
    file: "manufacturing-financing-report.pdf",
  },
  "marina-financing": {
    name: "Marina Financing Report",
    file: "marina-financing-report.pdf",
  },
  "medical-office-financing": {
    name: "Medical Office Financing Report",
    file: "medical-office-financing-report.pdf",
  },
  "mixed-use-financing": {
    name: "Mixed-Use Financing Report",
    file: "mixed-use-financing-report.pdf",
  },
  "mobile-home-park-financing": {
    name: "Mobile Home Park Financing Report",
    file: "mobile-home-park-financing-report.pdf",
  },
  "multifamily-financing": {
    name: "Multifamily Financing Report",
    file: "multifamily-financing-report.pdf",
  },
  "office-building-financing": {
    name: "Office Building Financing Report",
    file: "office-building-financing-report.pdf",
  },
  "owner-user-sba-loans": {
    name: "Owner-User SBA Loans Guide",
    file: "owner-user-sba-loans-guide.pdf",
  },
  "religious-church-financing": {
    name: "Religious & Church Financing Report",
    file: "religious-church-financing-report.pdf",
  },
  "rental-investor-loans": {
    name: "Rental Investor Loans Guide",
    file: "rental-investor-loans-guide.pdf",
  },
  "residential-portfolio": {
    name: "Residential Portfolio Report",
    file: "residential-portfolio-report.pdf",
  },
  "restaurant-financing": {
    name: "Restaurant Financing Report",
    file: "restaurant-financing-report.pdf",
  },
  "retail-financing": {
    name: "Retail Financing Report",
    file: "retail-financing-report.pdf",
  },
  "rv-park-financing": {
    name: "RV Park Financing Report",
    file: "rv-park-financing-report.pdf",
  },
  "sba-504-loans": {
    name: "SBA 504 Loans Guide",
    file: "sba-504-loans-guide.pdf",
  },
  "sba-7a-loans": {
    name: "SBA 7(a) Loans Guide",
    file: "sba-7a-loans-guide.pdf",
  },
  "self-storage-financing": {
    name: "Self-Storage Financing Report",
    file: "self-storage-financing-report.pdf",
  },
  "special-purpose-financing": {
    name: "Special Purpose Financing Report",
    file: "special-purpose-financing-report.pdf",
  },
  "student-housing-financing": {
    name: "Student Housing Financing Report",
    file: "student-housing-financing-report.pdf",
  },
  "triple-net-financing": {
    name: "Triple Net Financing Guide",
    file: "triple-net-financing-guide.pdf",
  },
  "veterinary-clinic-financing": {
    name: "Veterinary Clinic Financing Report",
    file: "veterinary-clinic-financing-report.pdf",
  },
  "vineyard-financing": {
    name: "Vineyard Financing Report",
    file: "vineyard-financing-report.pdf",
  },
};
