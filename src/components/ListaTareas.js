import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = ({ stateTarea, borrarTarea}) => {
    return (
        <div>
            <ListGroup>
                {
                     stateTarea.map((valor, posicion)=>{return <ItemTarea borrarTarea={borrarTarea} tarea={valor} pos={posicion} key={posicion}></ItemTarea>}
                    )
                }
                
            </ListGroup>
        </div>
    );
};

export default ListaTareas;