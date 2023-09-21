import React from 'react';

type SectionHeadingProps = {
  title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return <h2 className='text-3xl font-normal mb-8'>{title}</h2>;
};

export default SectionHeading;
