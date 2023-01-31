import { useState, useCallback } from "react";
import Header from "./components/Header";
import Modal from "react-modal";
import NewTransactionOpen from "./components/NewTransactionModal";
import Dashboard from "./components/Dashboard";
import { GlobalStyle } from "./styles/globalStyle";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <NewTransactionOpen
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
    </>
  );
};

export default App;
