import { ReactNode } from "react";
import { SnackbarProvider } from 'notistack';
import Snackbar from "./snackbar";


function BoardSnackbarProvider({children}: { children: ReactNode }) {
    return (
        <SnackbarProvider
          maxSnack={3}
          content={Snackbar}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          autoHideDuration={3000}
        >
          {children}
        </SnackbarProvider>
      );
}

export default BoardSnackbarProvider;