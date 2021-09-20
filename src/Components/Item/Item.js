import React, {Fragment} from 'react';
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'
import imagen from '../../images/muebles.png'

function Item(props) {
    //{titulo: "", precio:""
    return (
        <Fragment>
            <div className="card " style={{width: "18rem"}}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className="card-img-top" src={"..."} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <ItemCount stock={5}
                                   initial={1} />
                    </div>
            </div>
        </Fragment>
    )
}

export default Item;