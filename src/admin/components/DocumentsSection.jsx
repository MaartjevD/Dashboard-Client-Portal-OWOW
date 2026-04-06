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
    <section className="container-fluid px-0">
      <div className="row g-4">
        {documentsData.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-xl-4">
            <DocumentCard
              data={item}
              onSave={(updatedItem) =>
                handleSaveDocument(item.id, updatedItem)
              }
              onDelete={() => handleDeleteDocument(item.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default DocumentsSection;