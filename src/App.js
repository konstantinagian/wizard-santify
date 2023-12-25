import { useState } from 'react';
import mergeImages from 'merge-images';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  function mergeWithSanta(e) {
    console.log(e)
    mergeImages([URL.createObjectURL(image), '/santa-wizard-hat.png'])
      .then(b64 => setResultImage(b64));
  }

  return (
    <div className="App">
      <header className="App-header">
        {image && (
          <div>
            <img
              alt={image.name ?? "not found"}
              width={"250px"}
              src={URL.createObjectURL(image)}
            />
            <br />
            <button onClick={() => {
              setImage(null)
              setResultImage(null)
            }}>Remove</button>
            <button onClick={mergeWithSanta}>🎅</button>
          </div>
        )}
        {resultImage && (
          <div>
            <img
              alt={"santa-" + image.name ?? "not found"}
              width={"250px"}
              src={resultImage}
            />
          </div>
        )}

        <div>
          <input
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
