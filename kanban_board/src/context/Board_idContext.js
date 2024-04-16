import { createContext } from "react";

const Board_idContext = createContext(1);

const Board_idProvider = Board_idContext.Provider;

const Board_idConsumer = Board_idContext.Consumer;

export { Board_idProvider, Board_idConsumer, Board_idContext };
