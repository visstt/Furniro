import React, { useState } from 'react';
import axios from 'axios';
import './UploadForm.css';

const UploadForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = () => {
        const blob = new Blob([reader.result], { type: file.type });
        setImage(blob);
      };
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!image) {
      setMessage('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image, 'image.jpg'); // Задаем имя файла и его тип

    try {
      const response = await axios.post('http://localhost:8080/addProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Data successfully uploaded!');
      console.log(response.data);
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="container">
      <h1>Upload Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </label>
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p className={message.includes('Error') ? 'error' : ''}>{message}</p>}
    </div>
  );
};

export default UploadForm;
