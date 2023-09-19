"use client";
import { createContext, useState, ReactNode, FC } from "react";

type Modals = {
  RouteCustomerModal: "show" | "";
  AiDesignWaitListModal: "show" | "";
};

interface ThemeContextProps {
  toggle?: () => void;
  showModal?: string;
  modals: {
    toggle: (modal: keyof Modals) => void;
    state: Modals;
  };
}

export const ThemeContext = createContext<ThemeContextProps>({
  modals: {
    state: { RouteCustomerModal: "", AiDesignWaitListModal: "" },
    toggle: function () {},
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState("unshow");
  const [modals, setModals] = useState<Modals>({
    RouteCustomerModal: "",
    AiDesignWaitListModal: "",
  });

  const toggle = () => {
    setShowModal((prev) => (prev == "unshow" ? "show" : "unshow"));
  };

  const toggleModal = (modal: keyof Modals) => {
    document.body.style.overflow = modals[modal] === "show" ? "auto" : "hidden";
    setModals((prev) => ({
      ...modals,
      [modal]: prev[modal] !== "show" ? "show" : "",
    }));
  };

  return (
    <ThemeContext.Provider
      value={{
        toggle,
        showModal,
        modals: { state: modals, toggle: toggleModal },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
