export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samy Ali",
    url: "https://samyali.es",
    sameAs: [
      "https://github.com/samyalisanchez",
      "https://linkedin.com/in/samyalisanchez",
    ],
    jobTitle: "Full-stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
    description:
      "Full-stack developer specialized in React, Next.js, and Node.js development.",
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Web Development",
      "Full-stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
