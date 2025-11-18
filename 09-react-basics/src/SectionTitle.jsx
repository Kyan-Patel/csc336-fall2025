function SectionTitle({ children }) {
  return (
    <h2
      style={{
        borderBottom: "1px solid #ccc",
        paddingBottom: "4px",
        marginTop: "16px",
        marginBottom: "8px",
      }}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
