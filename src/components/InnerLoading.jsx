import { Box, CircularProgress, Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import { loading } from "src/redux/selectors/LoadingSelector";

const InnerLoading = ({ children }) => {
  const isLoading = useSelector(loading);

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            p: 3,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {children}
    </>
  );
};

export default InnerLoading;
