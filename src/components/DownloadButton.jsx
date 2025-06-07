const DownloadButton = ({ onClick }) => {
    return (
        <button
            className="download-button"
            onClick={onClick}
            title="Download canvas as PNG"
        >
            Download PNG
        </button>
    );
};

export default DownloadButton; 