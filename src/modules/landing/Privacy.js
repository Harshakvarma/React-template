import withRoot from './../customComponents/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Markdown from './../customComponents/components/Markdown';
import Typography from './../customComponents/components/Typography';
import LayoutBody from './../customComponents/components/LayoutBody';
import AppAppBar from './../customComponents/views/AppAppBar';
import privacy from './privacy.md';
import AppFooter from './../customComponents/views/AppFooter';

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <LayoutBody margin marginBottom>
        <Typography variant="h3" gutterBottom marked="center" align="center">
          Privacy
        </Typography>
        <Markdown>{privacy}</Markdown>
      </LayoutBody>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
