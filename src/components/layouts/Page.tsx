import { Helmet } from 'react-helmet-async';
import { forwardRef, Fragment } from 'react';
import { Box } from '@mui/material';

const Page = forwardRef(({ children, title = '', meta, ...other } : any, ref) => (
  <Fragment>
    <Helmet>
      <title>{`${title} | ECP Web`}</title>
      {meta}
    </Helmet>
    <Box ref={ref} {...other}>
      {children}
    </Box>
  </Fragment>
));

export default Page;
