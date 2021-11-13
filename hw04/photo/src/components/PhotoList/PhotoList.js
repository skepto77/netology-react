import { useState } from 'react';

const PhotoList = () => {
  const [data, setData] = useState([]);

  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', (evt) => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener('error', (evt) => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  };

  const onSelectHandle = async (e) => {
    const files = [...e.target.files];
    const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
    const { name } = files[0];
    setData([...data, { name, data: urls }]);
  };

  const onRemoveHandle = (name) => (e) => {
    setData([...data.filter((item) => item.name !== name)]);
  };

  return (
    <div className='container '>
      <div className='selectFile'>
        <form>
          <input type='file' onChange={onSelectHandle} />
        </form>
      </div>
      {console.log(data)}
      {data.length > 0 && (
        <div className='result'>
          {data.map((image) => (
            <div className='result__item' key={image.name}>
              <img src={image.data} alt={image.name} width='200' height='200' />
              <button className='btn' onClick={onRemoveHandle(image.name)}>
                &#10005;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoList;
