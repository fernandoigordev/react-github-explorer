import { RepositoryItem } from "./RepositoryItem";
import "../styles/Repositories.css";

const repository = {
    name: "wk-tecnology",
    description: "Teste desenvolvedor Delphi",
    link: "#"
}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}