import { Suburb } from "@/lib/suburbs";
import { business } from "@/lib/business";

export function JsonLd({ suburb }: { suburb: Suburb }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${business.siteUrl}/painter/${suburb.slug}`,
    name: business.name,
    description: `Professional painting and decorating services in ${suburb.name}, WA. Interior, exterior, and roof painting by D Wright Painting & Decorating.`,
    telephone: "+61435913635",
    email: business.email,
    url: `${business.siteUrl}/painter/${suburb.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: suburb.name,
      addressRegion: "WA",
      postalCode: suburb.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: suburb.latitude,
      longitude: suburb.longitude,
    },
    areaServed: {
      "@type": "Place",
      name: `${suburb.name}, WA ${suburb.postcode}`,
    },
    openingHours: ["Mo-Fr 07:00-17:00", "Sa 08:00-14:00"],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Painting Services in ${suburb.name}`,
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Decorative Finishes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wallpapering" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Builds & Repaints" } },
      ],
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Painting Services in ${suburb.name}`,
    description: suburb.intro,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: "+61435913635",
    },
    areaServed: {
      "@type": "Place",
      name: `${suburb.name}, WA`,
    },
    serviceType: "Painting and Decorating",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: suburb.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: business.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Painter",
        item: `${business.siteUrl}/#areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Painter ${suburb.name}`,
        item: `${business.siteUrl}/painter/${suburb.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
