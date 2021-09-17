import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import React, { useState } from "react";

const Working = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="working">
      <Button type="primary" onClick={showModal}>
        <h6> How It Works</h6>
      </Button>
      <Modal
        title="How WEBSITE Works"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>User has to first Login to the website</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>
        <p>............</p>

        {/* <b>Than they have to fill the swat analysis Form</b> */}
        {/* <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Modal>
    </div>
  );
};
export default Working;

//   ReactDOM.render(<App />, document.getElementById('container'));
