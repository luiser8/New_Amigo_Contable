import { createRef, forwardRef } from 'react';
import { Alert, Snackbar } from '@mui/material';

const SnackBarCustom = (
    {
        open,
        setOpen,
        vertical,
        horizontal,
        severityOption,
        msj,
    }: any
) => {
    const ref = createRef();
    const AlertRef = forwardRef((props, ref): any => (
        <Alert severity={severityOption} sx={{ width: '100%' }} onClose={() => setOpen(false)}>
            {msj}
        </Alert>
      ));

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical, horizontal }}
            >
            <AlertRef ref={ref} />
        </Snackbar>
    )
}


export default SnackBarCustom;