import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl mb-8 font-medium capitalize text-center dark:text-primary">
      {children}
    </h2>
  );
}
