import { Text } from 'react-konva';

const StickerCanvas = ({ stickers, onDelete, onPositionChange }) => {
    const snapToGrid = (value) => {
        return Math.round(value / 40) * 40;
    };

    return stickers.map((sticker) => (
        <Text
            key={sticker.id}
            text={sticker.type === 'emoji1' ? '😊' : sticker.type === 'emoji2' ? '🌟' : '🎨'}
            x={sticker.x}
            y={sticker.y}
            fontSize={40}
            draggable
            onDragEnd={(e) => {
                const newX = snapToGrid(e.target.x());
                const newY = snapToGrid(e.target.y());
                onPositionChange(sticker.id, newX, newY);
            }}
            onDblClick={() => onDelete(sticker.id)}
        />
    ));
};

export default StickerCanvas; 