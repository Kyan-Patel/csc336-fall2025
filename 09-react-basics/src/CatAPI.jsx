import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

function CatAPI() {
  const [catImage, setCatImage] = useState("");
  const [loading, setLoading] = useState(true);

  function fetchCat() {
    setLoading(true);

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        setCatImage(data[0].url);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="app">
      <SectionTitle>Random Cat</SectionTitle>

      {loading && <p>Loading a cute cat...</p>}

      {!loading && catImage && (
        <img
          src={catImage}
          alt="A random cat"
          style={{ maxWidth: "300px", borderRadius: "10px" }}
        />
      )}

      <button onClick={fetchCat} className="add-button" style={{ marginTop: "16px" }}>
        Show Another Cat
      </button>
    </div>
  );
}

export default CatAPI;
