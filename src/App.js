import { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);

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
            <button onClick={() => setImage(null)}>Remove</button>
          </div>
        )}

        <div>
          <input
            className="file1"
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
