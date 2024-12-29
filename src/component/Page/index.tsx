import React from 'react';
import { PageProps } from './types';

const Page: React.FC<PageProps> = ({title, children}) => {
  return (
    <div>
      <h1>Page</h1>
        <h2>{title}</h2>
        {children}
    </div>
  );
}
export default Page ;