import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ItemTarea = ({tarea, borrarTarea, pos}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between lead'>{tarea} <Button variant="danger" onClick={()=>borrarTarea(pos)}>Borrar</Button></ListGroup.Item>
    );
};
export default ItemTarea;