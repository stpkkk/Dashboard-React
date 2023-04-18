import React from 'react';
import { FaReact } from 'react-icons/fa';
import { PageWrapper, PageTitle, Typography } from '../components';

export const AboutPage: React.FC = () => {
  const paragraphs = [
    {
      paragraph:
        'The Dashboard project is a web application that provides users with visual insights and analytics for a particular data set. The data set is fetched from a JSON server, and the application is built using modern front-end technologies including React, Redux Toolkit, TypeScript, Highcharts, and Styled Components.',
    },
    {
      paragraph: 'Features:',
    },
    {
      paragraph:
        ' Data Visualization: The application uses Highcharts, to visualize the data in various formats such as line charts, bar charts, and pie charts. The charts are highly customizable and provide users with interactive and visually appealing representations of the data.',
    },
    {
      paragraph:
        ' State Management: Redux Toolkit, which is a set of tools for efficient Redux development, is used for state management in the application. It provides a robust and scalable solution for managing the application`s state.',
    },
    {
      paragraph:
        'Type-Safe Development: TypeScript, a statically-typed superset of JavaScript, is used to ensure type safety and provide better developer experience. It helps catch potential bugs and provides autocompletion and type checking, resulting in more robust and reliable code.',
    },
    {
      paragraph:
        'Styling: Styled Components, a popular CSS-in-JS library, is used for styling the components in the application. It allows for writing CSS in JavaScript, providing dynamic styling based on props and maintaining a modular and scalable styling system.',
    },
    {
      paragraph:
        'Data Management: The application fetches data from a JSON server using REST API endpoints. JSON Server is that provides a backend for development and testing purposes. It allows for simulating CRUD operations and managing data in a simple JSON file.',
    },
  ];

  return (
    <PageWrapper column>
      <PageTitle>About</PageTitle>
      <Typography>
        Test application by Stepanov Igor for &quot;Natlex&quot;
      </Typography>
      <ul>
        {paragraphs.map(({ paragraph }: any) => (
          <li>
            <Typography mw={600} m="0 0 8px">
              {paragraph}
            </Typography>
          </li>
        ))}
      </ul>
      <FaReact size={80} />
    </PageWrapper>
  );
};
