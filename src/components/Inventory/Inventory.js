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
        <h1 variant='danger' className='text-center mt-5'>Complete Your Payment Using One of this Method</h1>
      <div className='button'>
        <Button variant='success' onClick={() => setSmShow(true)} className="me-2">
          <img className='me-2' src='https://play-lh.googleusercontent.com/1CRcUfmtwvWxT2g-xJF8s9_btha42TLi6Lo-qVkVomXBb_citzakZX9BbeY51iholWs' />
          B-Kash Payment
        </Button>
        <Button variant='info' onClick={() => setSmShowtwo(true)} className="me-2">
          <img className='me-2' src='https://play-lh.googleusercontent.com/Iks014Ul-atatMhWs8rLbtG7cIZLPfpeMDdkLtmq5o7D5_MlFNu5mmIqRHAY45aOhapp' />
          Nagad Payment
        </Button>
        <Button onClick={() => setSmShowthree(true)} className="me-2">
          <img className='me-2' src='https://thumbs.dreamstime.com/b/money-cash-logo-vector-green-91037524.jpg' />
          Cash on delivery
        </Button>
      </div>
      <Modal className="modal"
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

      <Modal className="modal"
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

      <Modal className="modal"
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


