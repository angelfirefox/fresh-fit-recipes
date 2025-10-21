"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button 
      onClick={() => window.print()}
      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg print:hidden transition-colors"
    >
      <Printer size={18} />
      Print Recipe
    </button>
  );
}