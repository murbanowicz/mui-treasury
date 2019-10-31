import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/components/slide';

const CardContentPage = () => (
  <DemoPage
    title={'Slide'}
    description={'A fancy component that every modern website has'}
    DemoComponentsProps={{
      noDefaultSection: true,
      customComponents,
      DefaultComponent,
      normalGridItemConfig: {
        lg: 6,
      },
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
        minWidth: 600,
      },
    }}
  />
);

export default CardContentPage;
