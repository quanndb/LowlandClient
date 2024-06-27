import { Box, CircularProgress, Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "src/redux/selectors/LoadingSelector";
import LoadingManagerSlice from "src/redux/slices/LoadingManagerSlice";

const LoadingComp = ({ children }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(loading);

  return (
    <>
      <Dialog open={isLoading} maxWidth="xl">
        {isLoading && (
          <Box sx={{ p: 3 }}>
            <CircularProgress />
          </Box>
        )}
      </Dialog>
      {children}
    </>
  );
};

export default LoadingComp;
