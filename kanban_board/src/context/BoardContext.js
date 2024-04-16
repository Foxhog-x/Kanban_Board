import { createContext } from "react";

const BoardContext = createContext(1);

const BoardProvider = BoardContext.Provider;

const BoardConsumer = BoardContext.Consumer;

export { BoardProvider, BoardConsumer, BoardContext };
