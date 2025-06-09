import React from "react";

export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "Hi, this is a notice",
      variant: "notice",
    },
    {
      id: crypto.randomUUID(),
      message: "Be Careful from now on!",
      variant: "warning",
    },
    {
      id: crypto.randomUUID(),
      message: "Great Job!",
      variant: "success",
    },
    {
      id: crypto.randomUUID(),
      message: "Is that so?!",
      variant: "error",
    },
  ]);

  function createToast({ message, variant }) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToasts((toasts) => [...toasts, newToast]);
  }

  function dismissToast(toastId) {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== toastId));
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
