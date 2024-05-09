import { createContext } from "react";

const IsDropped_Context = createContext(false);

const IsDropped_Provider = IsDropped_Context.Provider;

const IsDropped_Consumer = IsDropped_Context.Consumer;

export { IsDropped_Context, IsDropped_Provider, IsDropped_Consumer };
