import React from 'react';

export interface FAQSchemaItem {
  question: string;
  answer: string;
}

export interface HowToStepSchemaItem {
  title: string;
  desc: string;
}

interface StructuredDataProps {
  toolName: string;
  toolDescription: string;
  url: string;
  faqs?: FAQSchemaItem[];
  howItWorksSteps?: HowToStepSchemaItem[];
}

export function StructuredData({ toolName, toolDescription, url, faqs, howItWorksSteps }: StructuredDataProps) {
  // SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: toolName,
    description: toolDescription,
    applicationCategory: "BrowserApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    url: url
  };

  // FAQPage Schema
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    };
  }

  // HowTo Schema
  let howToSchema = null;
  if (howItWorksSteps && howItWorksSteps.length > 0) {
    howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to use ${toolName}`,
      step: howItWorksSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.desc
      }))
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
    </>
  );
}
