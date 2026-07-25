"use client";

import * as React from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && <div className="pb-4 text-gray-600">{children}</div>}
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
}

function Accordion({ children }: AccordionProps) {
  return <div className="divide-y divide-gray-200">{children}</div>;
}

export { Accordion, AccordionItem };
