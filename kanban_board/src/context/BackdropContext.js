import { createContext } from "react";

const BackdropContext = createContext(false);

const Backdrop_Provider = BackdropContext.Provider;

const Backdrop_Consumer = BackdropContext.Consumer;

export { BackdropContext, Backdrop_Provider, Backdrop_Consumer };
