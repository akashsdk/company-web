import React, { useState } from "react";
import "./Contacts.css";

import Footer from "../Components/Footer";

import Image1 from "../Image/Group-1000002614-1.png";

import { Modal, message } from "antd";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    text: "",
  });

  const { name, email, phone, gender, text } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "male",
      text: "",
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "successful!",
        duration: 2,
      });
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="AppBody">
      {contextHolder}
      <div className="contacts-Body1">
        <div className="contacts-Body">
          <div className="contacts-Left">
            <p className="contacts-Text1">Contact Us</p>
            <p className="contacts-Text2">
              Fill in the below form to receive a detailed estimation.
              <br />
              One of our friendly team member will be in touch soon
            </p>
            <div className="contacts-Box1">
              <div className="contacts-Box2">
                <p className="contacts-Text3">Name:</p>
                <p className="contacts-Text4">*</p>
              </div>
              <div className="contacts-Box3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="contacts-Input"
                  placeholder="Your Good Name"
                />
              </div>
            </div>

            <div className="contacts-Box5">
              <div className="contacts-Box7">
                <div className="contacts-Box2">
                  <p className="contacts-Text3">Email:</p>
                  <p className="contacts-Text4">*</p>
                </div>
                <div className="contacts-Box6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="contacts-Input2"
                    placeholder="Enter Email Id"
                  />
                </div>
              </div>

              <div className="contacts-Box7">
                <div className="contacts-Box2">
                  <p className="contacts-Text3">Phone:</p>
                </div>
                <div className="contacts-Box6">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]*"
                    value={phone}
                    onChange={handleChange}
                    className="contacts-Input2"
                    placeholder="Enter Phone No"
                  />
                </div>
              </div>
            </div>

            <div className="contacts-Box1">
              <div className="contacts-Box2">
                <p className="contacts-Text3">Services:</p>
                <p className="contacts-Text4">*</p>
              </div>
              <div className="contacts-Box3">
                <select
                  className="contacts-Input"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                >
                  <option value="1">Team Augmentation</option>
                  <option value="2">Offshore Office Expansion</option>
                  <option value="3">MVP Service</option>
                  <option value="4">End to End Development</option>
                  <option value="5">Others</option>
                </select>
              </div>
            </div>

            <div className="contacts-Box1">
              <div className="contacts-Box2">
                <p className="contacts-Text3">Message:</p>
                <p className="contacts-Text4">*</p>
              </div>
              <div className="contacts-Box4">
                <textarea
                  id="text"
                  name="text"
                  value={text}
                  onChange={handleChange}
                  className="contacts-textarea"
                />
              </div>
            </div>

            <div className="contacts-Button-Div">
              <button
                className="contacts-Button1"
                type="button"
                onClick={showModal}
              >
                <p className="contacts-Button-Text">Reset</p>
              </button>
              <button className="contacts-Button2" onClick={openMessage}>
                <p className="contacts-Button-Text">Send</p>
              </button>
            </div>
          </div>
          <Modal
            title="Confirm to Reset !"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          ></Modal>

          <div className="contacts-Right">
            <img className="contacts-Image" src={Image1} alt="" />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
