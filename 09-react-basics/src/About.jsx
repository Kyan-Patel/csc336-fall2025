import SectionTitle from "./SectionTitle";

function AboutPage() {
  return (
    <div className="app">
      <SectionTitle>About</SectionTitle>

      <p style={{ maxWidth: "500px", marginTop: "10px" }}>
        This page provides a short introduction to the website. It was created to
        practice building a multi-page React application using components and routing.
      </p>

      <p style={{ maxWidth: "500px", marginTop: "10px" }}>
        The site includes different pages that show how React can load content,
        update state, and respond to user actions.
      </p>
    </div>
  );
}

export default AboutPage;
