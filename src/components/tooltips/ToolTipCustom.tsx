import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';

const TooltipCustom = ({ title, placement, children }: any) => {
    return (
        <Tooltip title={title} placement={placement}>
            {children}
        </Tooltip>
    )
}

TooltipCustom.propTypes = {
    title: PropTypes.string,
    placement: PropTypes.string,
    children: PropTypes.node,
};

export default TooltipCustom;
