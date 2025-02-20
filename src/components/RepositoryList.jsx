import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/Repositories.css";

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/fernandoigordev/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    console.log(repositories)

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul className="list-group">
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>   
        </section>
    );
}