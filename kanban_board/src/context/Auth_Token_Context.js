import { createContext } from "react";

const Auth_Token_Context = createContext(null);

const Auth_Token_Provider = Auth_Token_Context.Provider;

const Auth_Token_Consumer = Auth_Token_Context.Consumer;
