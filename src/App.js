import './App.css';
import ThreeScene from "./ThreeScene";
import React, {useState} from 'react'
import Modal from 'react-modal'
import {Button} from "./Button";

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)"
    }
};
function App() {
    const [isVisible, setIsVisible] = useState(false)
    const showModal = () => setIsVisible(true)
    function closeModal() {
        setIsVisible(false);
    }
  return (
    <div className="App">
        <Button onClick={showModal}>Show model</Button>
        <Modal isOpen={isVisible} style={customStyles}>
            <button onClick={closeModal}>close</button>
            <ThreeScene/>
        </Modal>
    </div>
  );
}

export default App;
