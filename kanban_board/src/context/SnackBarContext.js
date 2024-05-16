import { createContext } from "react";

const SnackBarContext = createContext(false);

const SnackBarProvider = SnackBarContext.Provider;

const SnackBarConsumer = SnackBarContext.Consumer;

export { SnackBarContext, SnackBarProvider, SnackBarConsumer };
