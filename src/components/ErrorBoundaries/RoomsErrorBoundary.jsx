import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function RoomsErrorBoundary() {
  return (
    <Box display="flex" justifyContent={"center"}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Ошибка при загрузки контента
      </Alert>
    </Box>
  );
}
