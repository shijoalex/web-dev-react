import { useEffect, useState } from "react";

function App() {
  // Our small database
  const database = [
    {
      id: 1,
      keyword: "react",
      title: "React",
      content:
        "React is a JavaScript library used for building user interfaces. It uses components and allows developers to create interactive web applications.",
    },
    {
      id: 2,
      keyword: "javascript",
      title: "JavaScript",
      content:
        "JavaScript is a programming language commonly used to make websites interactive. It can be used for frontend and backend development.",
    },
    {
      id: 3,
      keyword: "python",
      title: "Python",
      content:
        "Python is a high-level programming language known for its simple syntax. It is widely used in web development, data science, artificial intelligence and automation.",
    },
    {
      id: 4,
      keyword: "java",
      title: "Java",
      content:
        "Java is a popular object-oriented programming language. It is commonly used for enterprise applications, Android development and backend systems.",
    },
    {
      id: 5,
      keyword: "html",
      title: "HTML",
      content:
        "HTML stands for HyperText Markup Language. It is used to structure the content of webpages.",
    },
    {
      id: 6,
      keyword: "css",
      title: "CSS",
      content:
        "CSS stands for Cascading Style Sheets. It is used to control the appearance, layout and design of webpages.",
    },
  ];

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // Runs whenever search changes
  useEffect(() => {
    if (search.trim() === "") {
      setResults([]);
      return;
    }

    const filteredResults = database.filter((item) => {
      return (
        item.keyword.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase())
      );
    });

    setResults(filteredResults);
  }, [search]);

  return (
    <div style={styles.container}>
      <h1>Mini Search Engine</h1>

      <input
        type="text"
        placeholder="Search for something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchBox}
      />

      {search && (
        <p>
          Search results for: <strong>{search}</strong>
        </p>
      )}

      {results.length === 0 && search !== "" && (
        <p>No results found.</p>
      )}

      {results.map((item) => (
        <div key={item.id} style={styles.result}>
          <h2>{item.title}</h2>

          <p>{item.content}</p>

          <small>Keyword: {item.keyword}</small>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "700px",
    margin: "50px auto",
    fontFamily: "Arial",
  },

  searchBox: {
    width: "100%",
    padding: "15px",
    fontSize: "18px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  },

  result: {
    padding: "20px 0",
    borderBottom: "1px solid #ddd",
  },
};

export default App;