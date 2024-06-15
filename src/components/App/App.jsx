import React, { Suspense, useState } from 'react';
import { Layout } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import { ModalCar } from '../ModalCar/ModalCar';
import { NotFound } from '../../pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../Loader/Loader';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Favorites = React.lazy(() => import('../../pages/Favorites/Favorites'));
const Catalog = React.lazy(() => import('../../pages/Catalog/Catalog'));

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalCar closeModal={closeModal} />
        </Modal>
      )}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/catalog"
              element={<Catalog openModal={openModal} />}
            />
            <Route
              path="/favorites"
              element={<Favorites openModal={openModal} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};
