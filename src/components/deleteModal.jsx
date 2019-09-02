import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteModal = ({ isDeleteModalOpen, handleDelete }) => {
    return (
        <React.Fragment>
            <Modal show={isDeleteModalOpen} centered backdrop={'static'} size="sm" onHide={() => handleDelete(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Do you want to delete</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button className="btn-sm" onClick={() => handleDelete(false)} variant="secondary">Close</Button>
                    <Button className="btn-sm" onClick={() => handleDelete(true)} variant="danger">Delete</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default DeleteModal;