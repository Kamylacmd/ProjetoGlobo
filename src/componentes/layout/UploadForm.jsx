import './UploadForm.css';

function UploadForm() {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("video", file);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <label className="upload-label">
    Selecionar vídeo
    <input type="file" accept=".mxf,.mp4,.mov" onChange={handleUpload} hidden />
    </label>

  );
}
export default UploadForm;