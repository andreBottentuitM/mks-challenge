import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { setAlertStatus } from "../../redux/reducers/alertReducer";
import { useAppSelector } from "../../redux/hooks/useAppSelector";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AlertToast = () => {
  const dispatch = useDispatch();

  const alert = useAppSelector((state) => state.alert.status);
  const text = useAppSelector((state) => state.alert.text);

  React.useEffect(() => {}, [text]);

  const handleClose = () => {
    dispatch(setAlertStatus(false));
  };

  return (
    <>
      {text === "Produto adicionado!" && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={alert}
            autoHideDuration={1500}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%", fontSize: "16px" }}
            >
              {text}
            </Alert>
          </Snackbar>
        </Stack>
      )}
      {text === "Produto já adicionado!" && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={alert}
            autoHideDuration={1500}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              sx={{ width: "100%", fontSize: "16px" }}
            >
              {text}
            </Alert>
          </Snackbar>
        </Stack>
      )}
      {text === "Error: Conexão não estabelecida!" && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={alert}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%", fontSize: "16px" }}
            >
              {text}
            </Alert>
          </Snackbar>
        </Stack>
      )}
    </>
  );
};
