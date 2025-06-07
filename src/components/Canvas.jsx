import { Stage, Layer } from 'react-konva';
import StickerCanvas from './StickerCanvas';

const Canvas = ({ stickers, onDelete, onPositionChange, stageRef }) => {
    return (
        <div className="canvas-container">
            <Stage
                width={600}
                height={400}
                ref={stageRef}
            >
                <Layer>
                    <StickerCanvas
                        stickers={stickers}
                        onDelete={onDelete}
                        onPositionChange={onPositionChange}
                    />
                </Layer>
            </Stage>
        </div>
    );
};

export default Canvas; 