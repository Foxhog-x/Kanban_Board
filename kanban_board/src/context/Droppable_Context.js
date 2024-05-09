import { createContext } from "react";

const Droppable_Context = createContext(null);

const Droppable_Provider = Droppable_Context.Provider;

const Droppable_Consumer = Droppable_Context.Consumer;

export { Droppable_Context, Droppable_Provider, Droppable_Consumer };
