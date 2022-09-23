import React from "react";
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../index.css';

GetList.propTypes = {
    pokemonList: PropTypes.array,
};
GetList.defaultProps = {
    pokemonList: [],
};

function GetList(props) {

    const {pokemonList} = props;

    return ( 
        <>
            <Row className="g-4" xs={1} md={2}>
                {pokemonList.map(post => (
                    <Col key={post.id}>
                        <Card border="dark" style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={post.sprites.front_default} />
                            <Card.Body>
                                <Card.Title>{post.name}</Card.Title>
                                <Card.Text>
                                    <label>Id: {post.id}</label> <br></br>
                                    <label>Base Experience: {post.base_experience}</label> <br></br>
                                    <label>Height: {post.height}</label> <br></br>
                                    <label>Weight: {post.weight}</label> <br></br>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
        
    );
}

export default GetList;