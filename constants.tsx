
import React from 'react';
import { ShieldCheck, Award, Globe2, Factory, PackageCheck } from 'lucide-react';

export const BRAND_NAME = "Charu Enterprises – India";
export const ESTABLISHED_YEAR = 1969;

export const TRUST_BADGES = [
  { icon: <ShieldCheck className="w-6 h-6" />, label: "ISO 9001:2015 Certified" },
  { icon: <Factory className="w-6 h-6" />, label: "50+ Years Manufacturing" },
  { icon: <PackageCheck className="w-6 h-6" />, label: "150M+ Components Supplied" },
  { icon: <Globe2 className="w-6 h-6" />, label: "Exports to 4+ Continents" },
  { icon: <Award className="w-6 h-6" />, label: "Govt. Awarded Company" }
];

export const PRODUCT_CATEGORIES = [
  { name: "Fence Fittings", description: "Pressed steel and aluminum fittings", image: "https://picsum.photos/seed/fence/400/300" },
  { name: "Hinges", description: "Heavy-duty industrial hinges", image: "https://picsum.photos/seed/hinge/400/300" },
  { name: "Clamps", description: "Tension and rail clamps", image: "https://picsum.photos/seed/clamp/400/300" },
  { name: "Tension Bars", description: "High-tensile steel bars", image: "https://picsum.photos/seed/bars/400/300" },
  { name: "Gate Hardware", description: "Complete gate solutions", image: "https://picsum.photos/seed/gate/400/300" },
  { name: "Custom Fabrication", description: "OEM specialized engineering", image: "https://picsum.photos/seed/fab/400/300" }
];

export const WHY_CHOOSE_US = [
  "In-house Galvanizing Plant for superior finish",
  "Die & Mold Development within premises",
  "Quality Testing Laboratory with modern equipment",
  "Zero-Defect Manufacturing philosophy",
  "Custom Engineering Solutions for OEM needs"
];
