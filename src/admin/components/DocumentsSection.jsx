import DocumentCard from "./DocumentCard";

function DocumentsSection({ documentsData, setDocumentsData }) {
  const handleSaveDocument = (id, updatedItem) => {
    setDocumentsData((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const handleDeleteDocument = (id) => {
    setDocumentsData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="documents-section">
      <div className="documents-grid">
        {documentsData.map((item) => (
          <DocumentCard
            key={item.id}
            data={item}
            onSave={(updatedItem) => handleSaveDocument(item.id, updatedItem)}
            onDelete={() => handleDeleteDocument(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default DocumentsSection;