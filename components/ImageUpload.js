// components/ImageUpload.js
import { useState } from 'react';
import styles from './ImageUpload.module.css';

export default function ImageUpload() {
    const [previewURL, setPreviewURL] = useState('');
    const [downloadURL, setDownloadURL] = useState('');

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const frame = new Image();
                frame.src = '/frame.png';
                frame.onload = () => {
                    ctx.drawImage(frame, 0, 0, img.width, img.height);
                    const resultURL = canvas.toDataURL('image/png');
                    setPreviewURL(resultURL);
                    setDownloadURL(resultURL);
                };
            };
        }
    };

    return (
        <div className={styles.container}>
            <label className={styles.uploadButton}>
            <input type="file" accept="image/*" onChange={handleUpload} />
                <i className="fas fa-plus"></i> Upload Image
            </label>

            {previewURL && <img src={previewURL} alt="Preview" className={styles.previewImage} />}

            {downloadURL && (
                <a href={downloadURL} download="result.png" className={styles.downloadLink}>
                    Download Image
                </a>
            )}
        </div>
    );
}
