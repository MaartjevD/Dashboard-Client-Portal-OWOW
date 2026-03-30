import UpdateTimeline from "./UpdateTimeline";
import UpdateCard from "./UpdateCard";

function UpdatesSection({ updatesData, setUpdatesData }) {
  const handleSaveUpdate = (id, updatedItem) => {
    setUpdatesData((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const handleDeleteUpdate = (id) => {
    setUpdatesData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="updates-section">
      <div className="updates-section__layout">
        <UpdateTimeline updatesData={updatesData} />

        <div className="updates-section__cards">
          {updatesData.map((item) => (
            <UpdateCard
              key={item.id}
              data={item}
              onSave={(updatedItem) => handleSaveUpdate(item.id, updatedItem)}
              onDelete={() => handleDeleteUpdate(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;