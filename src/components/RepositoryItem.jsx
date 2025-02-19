export function RepositoryItem(props){
    return (
        <li className="list-group-item">
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a className="btn btn-primary" href={props.repository.html_url} target="_blank" rel="noreferrer">
                Acessar repositório
            </a>
        </li>

        // <div className="card">
        //     <img className="card-img-top" src="..." alt="..." />
        //     <div className="card-body">
        //         <h5 className="card-title">{props.repository.name}</h5>
        //         <a className="btn btn-primary" href={props.repository.html_url}>
        //             Acessar repositório
        //         </a>
        //     </div>

        // </div>
    );
}