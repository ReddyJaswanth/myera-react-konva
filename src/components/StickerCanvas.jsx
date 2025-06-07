import { Text, Image } from 'react-konva';
import useImage from 'use-image';
import { useMemo } from 'react';

const StickerCanvas = ({ stickers, onDelete, onPositionChange }) => {
    const snapToGrid = (value) => {
        return Math.round(value / 40) * 40;
    };

    // Preload all PNG images
    const [barChartImage] = useImage('/stickers/bar-chart.png');
    const [brainstormImage] = useImage('/stickers/brainstorm.png');

    // Create a map of images for easy access
    const imageMap = useMemo(() => ({
        'bar-chart': barChartImage,
        'brainstorm': brainstormImage
    }), [barChartImage, brainstormImage]);

    return stickers.map((sticker) => {
        if (sticker.type.startsWith('emoji')) {
            return (
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
            );
        } else {
            const image = imageMap[sticker.type];
            if (!image) return null; // Don't render if image is not loaded yet

            return (
                <Image
                    key={sticker.id}
                    image={image}
                    x={sticker.x}
                    y={sticker.y}
                    width={40}
                    height={40}
                    draggable
                    onDragEnd={(e) => {
                        const newX = snapToGrid(e.target.x());
                        const newY = snapToGrid(e.target.y());
                        onPositionChange(sticker.id, newX, newY);
                    }}
                    onDblClick={() => onDelete(sticker.id)}
                />
            );
        }
    });
};

export default StickerCanvas; 