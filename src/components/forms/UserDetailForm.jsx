import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Set the root element of your app

const UserDetailForm = () => {
  const initialFormData = {
    location: '',
    interests: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    try {
      if (formData.location.trim() !== '' && formData.interests.trim() !== '') {
        setFormData(initialFormData);
        closeModal();
      } 
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Form Modal"
      >
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Where are you from:
            <input type="text" name="location" value={formData.location} onChange={handleChange} />
          </label>
          <br />
          <label>
            What interests you:
            <input type="text" name="interests" value={formData.interests} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default UserDetailForm;
