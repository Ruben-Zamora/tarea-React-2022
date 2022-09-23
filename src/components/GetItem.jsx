import React from "react";
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import '../index.css';

GetItem.propTypes = {
    itemList: PropTypes.array,
};
GetItem.defaultProps = {
    itemList: [],
};

function GetItem(props) {

    const {itemList} = props;

    return ( 
        <div className="post-list">
            {itemList.map(post => (
                <Card key={post.id}>
                    <Card.Img variant="top" src={post.sprites.default} />
                    <Card.Body>
                        <Card.Title>{post.name}</Card.Title>
                        <Card.Text>
                            <label>Id: {post.id}</label> <br></br>
                            <label>Cost: ${post.cost}</label>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default GetItem;