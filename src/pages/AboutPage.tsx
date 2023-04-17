import React from 'react';
import { FaReact } from 'react-icons/fa';
import { PageWrapper, PageTitle, Typography } from '../components';

export const AboutPage: React.FC = () => (
  <PageWrapper column>
    <PageTitle>About</PageTitle>
    <Typography>
      Test application by Stepanov Igor for &quot;Natlex&quot;
    </Typography>
    <FaReact size={150} />
  </PageWrapper>
);
