import React, { useContext, useState } from "react";
import { Notification } from "../components";
import { AlertColor } from "@mui/material";

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const getError = (msg: string) => {
    setSeverity("error");
    setOpen(true);
    setMsg(msg);
  };

  const getSuccess = (msg: string) => {
    setSeverity("success");
    setOpen(true);
    setMsg(msg);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const value = { getError, getSuccess };
  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        msg={msg}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifiacion = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("no Existe el contexto");
  return context;
};
