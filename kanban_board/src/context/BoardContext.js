import { createContext } from "react";

const BoardContext = createContext([]);

const BoardProvider = BoardContext.Provider;

const BoardConsumer = BoardContext.Consumer;

export { BoardProvider, BoardConsumer, BoardContext };
