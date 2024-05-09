import { createContext } from "react";

const Draggable_Context = createContext(null);

const Draggable_Provider = Draggable_Context.Provider;

const Draggable_Consumer = Draggable_Context.Consumer;

export { Draggable_Context, Draggable_Provider, Draggable_Consumer };
