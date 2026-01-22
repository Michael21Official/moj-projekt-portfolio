import { Box, CircularProgress } from '@mui/material';
import './LoadingSpinner.less';

export const LoadingSpinner = () => {
    return (
        <Box className="loading-container">
            <CircularProgress />
        </Box>
    );
};