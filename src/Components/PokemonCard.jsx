import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




const pokemonCard = ({pokemonCard}) => {
    const navigate = useNavigate();
    
    const navigateTo = (idPokemon) => {
      navigate("/Pokemon/"+idPokemon);
    }

    return <>
    <Card style={{ width: '25rem' }} onClick={() => {navigateTo(pokemonCard.name)}}>
      <Card.Img variant="top" src={"https://img.pokemondb.net/artwork/"+pokemonCard.name+".jpg"} />
      <Card.Body>
        <Card.Title>{pokemonCard.name}</Card.Title>
        <Button variant="primary">Voir Détail</Button>
      </Card.Body>
    </Card>
    </>;
}
 
export default pokemonCard;