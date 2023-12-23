import "./Files.css";

const Files = (files) => {
  if (files.length === 0) return "Loading";

  return (
    <div className="files">
      {files.files.map((file, i) => (
        <span key={file}>{file}</span>
      ))}
    </div>
  );
};

export default Files;
