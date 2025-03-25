import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "@/data/faq.json";

const splitFaqIntoTwoColumns = (faqList) => {
  const midpoint = Math.ceil(faqList.length / 2);
  return [faqList.slice(0, midpoint), faqList.slice(midpoint)];
};

const FAQSection = () => {
  const [leftColumn, rightColumn] = splitFaqIntoTwoColumns(faq);

  return (
    <section id="faqs" className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[leftColumn, rightColumn].map((column, colIdx) => (
          <div key={colIdx} className="space-y-4">
            {column.map((item, index) => (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem
                  value={`item-${colIdx}-${index}`}
                  className="bg-white/10 backdrop-blur-sm rounded-md border border-white/10 overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 text-left text-white text-sm sm:text-base font-medium hover:bg-white/5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2 text-gray-300 text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
