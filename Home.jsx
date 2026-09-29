import { useState, useEffect } from "react";

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => setRecipes(data.recipes))
            .catch((error) => console.error("Error fetching recipes", error));
    }, []);

    return (
        <div className="container">
            <h2>List of Recipes</h2>

            <table className="table table-dark">
                <thead className="text-center">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                        <th>Image</th>
                        <th>Prep Time</th>
                        <th>Servings</th>
                        <th>Cuisine</th>
                    </tr>
                </thead>

                <tbody className="table-warning">
                    {recipes.map((row) => {
                        return (
                            <tr key={row.id}>
                                <td>{row.id}</td>

                                <td>{row.name}</td>

                                <td>
                                    {row.ingredients.map((list, index) => (
                                        <li key={index}>{list}</li>
                                    ))}
                                </td>

                                <td>
                                    {row.instructions.map((list, index) => (
                                        <li key={index}>{list}</li>
                                    ))}
                                </td>

                                <td>
                                    <img
                                        src={row.image}
                                        alt={row.name}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "cover"
                                        }}
                                    />
                                </td>

                                <td>{row.prepTimeMinutes}</td>

                                <td>{row.servings}</td>

                                <td>{row.cuisine}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;