import { useState } from 'react';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';
import DownloadButton from './components/DownloadButton';
import './App.css';

function App() {
  const [stickers, setStickers] = useState([]);
  const [stageRef, setStageRef] = useState(null);

  const addSticker = (type) => {
    const newSticker = {
      id: Date.now(),
      type,
      x: 50,
      y: 50,
    };
    setStickers([...stickers, newSticker]);
  };

  const deleteSticker = (id) => {
    setStickers(stickers.filter(sticker => sticker.id !== id));
  };

  const updateStickerPosition = (id, x, y) => {
    setStickers(stickers.map(sticker =>
      sticker.id === id ? { ...sticker, x, y } : sticker
    ));
  };

  const downloadCanvas = () => {
    if (stageRef) {
      const dataURL = stageRef.toDataURL();
      const link = document.createElement('a');
      link.download = 'sticker-canvas.png';
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="app">
      <Canvas
        stickers={stickers}
        onDelete={deleteSticker}
        onPositionChange={updateStickerPosition}
        stageRef={setStageRef}
      />
      <div className="controls">
        <div className="sticker-buttons">
          <StickerButton type="emoji1" onClick={() => addSticker('emoji1')} emoji="😊" />
          <StickerButton type="emoji2" onClick={() => addSticker('emoji2')} emoji="🌟" />
          <StickerButton type="emoji3" onClick={() => addSticker('emoji3')} emoji="🎨" />
        </div>
        <DownloadButton onClick={downloadCanvas} />
      </div>
    </div>
  );
}

export default App;
