import React, { useEffect, useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormTareas = () => {
    let tareasLocalstorge = JSON.parse(localStorage.getItem("listaTareas")) || [];
    const [arregloTarea, setArregloTarea] = useState(tareasLocalstorge)
    const [tarea, setTarea] = useState("");
    
    useEffect(() => {
        localStorage.setItem("listaTareas", JSON.stringify(arregloTarea))
    }, [arregloTarea]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setArregloTarea([...arregloTarea,tarea]) 
        setTarea("")
    }

    const borrarTarea = (tarea) => {
        let arregloModificado = arregloTarea.filter((item, i)=>{return i !== tarea});
        setArregloTarea(arregloModificado);
    }



    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicEmail">
                    <Form.Control className='mx-3' type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)} value={tarea}/>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                </Form.Group>
            </Form>
            <ListaTareas stateTarea={arregloTarea} borrarTarea={borrarTarea}></ListaTareas>
        </div>
    );
};

export default FormTareas;