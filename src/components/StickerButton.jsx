const StickerButton = ({ type, onClick, emoji }) => {
    return (
        <button
            className="sticker-button"
            onClick={onClick}
            title={`Add ${emoji} sticker`}
        >
            <span className="sticker-emoji">{emoji}</span>
        </button>
    );
};

export default StickerButton; 