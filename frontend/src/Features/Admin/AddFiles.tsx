import React, { useRef } from 'react';

function AddFiles(): JSX.Element {

  const imageInput = useRef<HTMLInputElement>(null);

  const addForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (imageInput.current?.files?.length) {
      const image = imageInput.current.files;

      const formData = new FormData();

      for (const key in image) {
        formData.append('image', image[key]);
      }
    }
  };

  return (
    <div className="divAdd">
      <div className="add-service-form">
        <form className="add-form" onSubmit={addForm}>
          <p className="form-title">Добавление файлы</p>

          <div className="image-input">
            <input
              type="file"
              // className="service-image-input"
              placeholder="Загрузите фото"
              ref={imageInput}
              multiple
              required
            />
          </div>

          <button type="submit" className="add-btn">
            Добавить файлы
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFiles;
