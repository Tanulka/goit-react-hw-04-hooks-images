import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar/Searchbar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery';
import getImageApi from '../../services/api';
import Button from '../Button/Button.jsx';
import scrollPageDown from '../../js/scroll';

import Spinner from '../Spinner/Spinner.jsx';
import Modal from '../Modal/Modal.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setImages([]);
    setPage(1);
    getImage();
  }, [query]);

  useEffect(() => getImage(), [page]);

  function getImage() {
    setLoading(true);
    getImageApi(query, page)
      .then(res => {
        scrollPageDown();
        setImages(prevImages => [...prevImages, ...res]);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(() => {
        toast.error('Server error');
      });
  }

  const pageIncrement = () => {
    setPage(page + 1);
  };

  function getImageModal(largeImageURL) {
    setModalContent(largeImageURL);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={setQuery} />
      {images.length !== 0 && <ImageGallery images={images} getImageModal={getImageModal} openModal={toggleModal} />}
      {showModal && <Modal largeImageUrl={modalContent} onClose={toggleModal} />}
      {loading && <Spinner />}
      {images.length > 0 && <Button onClick={pageIncrement} />}

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
