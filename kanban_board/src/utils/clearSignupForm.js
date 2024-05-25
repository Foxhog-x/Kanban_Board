// ref.js
import React from "react";

export const formRefs = {
  firstNameRef: React.createRef(),
  lastNameRef: React.createRef(),
  emailRef: React.createRef(),
  passwordRef: React.createRef(),
};

export const clearSignupForm = () => {
  formRefs.nameRef.current.value = "";
  formRefs.emailRef.current.value = "";
};
