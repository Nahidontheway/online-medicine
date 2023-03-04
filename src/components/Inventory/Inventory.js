import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Inventory.css';

const Inventory = () => {
    const [smShow, setSmShow] = useState(false);
    const [smShowtwo, setSmShowtwo] = useState(false);
    const [smShowthree, setSmShowthree] = useState(false);
    return (
        <>
      <Button onClick={() => setSmShow(true)} className="m-5">
        B-Kash Payment
      </Button>
      <Button onClick={() => setSmShowtwo(true)} className="m-5">
        Nagad Payment
      </Button>
      <Button onClick={() => setSmShowthree(true)} className="m-5">
        Cash on delivery
      </Button>
      <Modal className="modal mx-5"
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <img src='https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg' />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="me-2">Your name</label>
          <input type='name'></input>
          <label className="me-2">Reference number</label>
          <input type='number'></input>
          <label className="me-2">Transaction Id </label>
          <input type='number'></input>
          <br />
          <button className='my-2' type='submit'>Submit</button>
        </Modal.Body>
      </Modal>

      <Modal className="modal mx-5"
        size="sm"
        show={smShowtwo}
        onHide={() => setSmShowtwo(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <img src='https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png' />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="me-2">Your name</label>
          <input type='name'></input>
          <label className="me-2">Reference number</label>
          <input type='number'></input>
          <label className="me-2">Transaction Id </label>
          <input type='number'></input>
          <br />
          <button className='my-2' type='submit'>Submit</button>
        </Modal.Body>
      </Modal>

      <Modal className="modal mx-5"
        size="sm"
        show={smShowthree}
        onHide={() => setSmShowthree(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <img src='https://previews.123rf.com/images/vectorgalaxy/vectorgalaxy1809/vectorgalaxy180901733/108951975-cash-vector-icon-isolated-on-transparent-background-cash-logo-concept.jpg' />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="me-2">Your name</label>
          <input type='name'></input>
          <br />
          <label className="me-2">Adress</label>
          <br />
          <input type='number'></input>
          <label className="me-2">Phone number </label>
          <input type='number'></input>
          <br />
          <button className='my-2' type='submit'>Submit</button>
        </Modal.Body>
      </Modal>
    </>
    );
};

export default Inventory;


