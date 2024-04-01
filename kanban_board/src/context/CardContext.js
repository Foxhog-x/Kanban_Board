import { createContext } from "react";

const CardContext = createContext(null);

const CardProvider = CardContext.Provider;

const CardConsumer = CardContext.Consumer;

export { CardProvider, CardConsumer, CardContext };
