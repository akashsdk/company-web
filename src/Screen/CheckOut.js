import React, { useState } from "react";
import "./CheckOut.css";

import Footer from "../Components/Footer";

import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LeftOutlined,
  RightOutlined,
  AppstoreOutlined,
  FileProtectOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import {
  Input,
  Button,
  Steps,
  Checkbox,
  Modal,
  Result,
  notification,
  message,
} from "antd";

const { TextArea } = Input;

export default function CheckOut() {
  const [page, setPage] = useState(1);

  // step-1
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    appName: "",
    projectProposal: "",
    customPac: "",
    budget: "",
    projectDetails: "",
  });
  const {
    name,
    email,
    phone,
    address,
    message,
    appName,
    projectProposal,
    customPac,
    budget,
    projectDetails,
  } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [appType, setAppType] = useState("");
  const selectChange1 = (e) => {
    setAppType(e.target.value);
  };

  const [admin, setAdmin] = useState("");
  const selectChange2 = (e) => {
    setAdmin(e.target.value);
  };

  const [coreLanguage, setCoreLanguage] = useState("");
  const selectChange3 = (e) => {
    setCoreLanguage(e.target.value);
  };

  const [language, setLanguage] = useState("");
  const selectChange4 = (e) => {
    setLanguage(e.target.value);
  };

  const [newPackage, setNewPackage] = useState("");
  const selectChange5 = (e) => {
    setNewPackage(e.target.value);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
    setFormData({
      appName: "",
      projectProposal: "",
      customPac: "",
      budget: "",
      projectDetails: "",
    });
    setAppType("");
    setAdmin("");
    setCoreLanguage("");
    setLanguage("");
    setNewPackage("");
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };

  const submit = () => {
    setTimeout(() => {
      openNotificationWithIcon("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        appName: "",
        projectProposal: "",
        customPac: "",
        budget: "",
        projectDetails: "",
      });

      setAppType("");
      setAdmin("");
      setCoreLanguage("");
      setLanguage("");
      setNewPackage("");
    }, 1000);

    setPage(3);
  };
  return (
    <div className="AppBody">
      {contextHolder}
      <div className="CheckOut-Body">
        <div className="Check-Body">
          <p className="Check-HeaderText">Oder Now</p>
          <p className="Check-Text1">
            We can give you the best product at the lowest price. Our main goal
            is to provide you with good quality service. Hope you like our
            service, Thank you so much. 😊
          </p>
        </div>
        <div className="Check-BodyBox">
          {page === 0 ? (
            // Step: 1 (Basic Information)
            <div className="Check-BodyDiv">
              <p className="Check-Text2">Step: 1 (Basic Information)</p>
              <Input
                size="large"
                placeholder="Full Name"
                allowClear
                prefix={<UserOutlined />}
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <Input
                size="large"
                placeholder="Email Id"
                allowClear
                prefix={<MailOutlined />}
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <br />
              <br />

              <Input
                size="large"
                placeholder="Phone No"
                allowClear
                prefix={<PhoneOutlined />}
                type="tel"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <Input
                size="large"
                placeholder="Address (Optional)"
                allowClear
                prefix={<EnvironmentOutlined />}
                type="text"
                name="address"
                value={address}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <TextArea
                showCount
                maxLength={250}
                placeholder="Message (Optional)"
                allowClear
                type="text"
                name="message"
                value={message}
                onChange={handleInputChange}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />

              <div className="CheckOut-Button-Div">
                <button className="CheckOut-Button">
                  <LeftOutlined className="CheckOut-Button-Icon" />
                  <p className="CheckOut-Button-Text">Previous</p>
                </button>
                <Button onClick={showModal} className="CheckOut-Button2" danger>
                  <p className="CheckOut-Button-Text">Reset</p>
                </Button>
                <button
                  className="CheckOut-Button"
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  <p className="CheckOut-Button-Text">Next</p>
                  <RightOutlined className="CheckOut-Button-Icon" />
                </button>
              </div>
              <Modal
                title="Confirm to Reset !"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              ></Modal>
            </div>
          ) : page === 1 ? (
            // Step: 2 (Project Proposal)
            <div className="Check-BodyDiv">
              <p className="Check-Text2">Step: 2 (Project Proposal)</p>
              <Input
                size="large"
                placeholder="Application Name (Optional)"
                allowClear
                prefix={<AppstoreOutlined />}
                type="text"
                name="appName"
                value={appName}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <TextArea
                showCount
                maxLength={1000}
                placeholder="Project Proposal (Optional)"
                allowClear
                style={{
                  height: 220,
                  resize: "none",
                }}
                type="text"
                name="projectProposal"
                value={projectProposal}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <select
                className="CheckOut-Select"
                value={appType}
                onChange={selectChange1}
              >
                <option value="">Application Type (Optional)</option>
                <option value="Web Application">Web Application</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="Both (Web & Mobile)">Both (Web & Mobile)</option>
                <option value="Desktop Application">Desktop Application</option>
                <option value="Game Development">Game Development</option>
              </select>
              <br />
              <br />
              <select
                className="CheckOut-Select"
                value={admin}
                onChange={selectChange2}
              >
                <option value="">Admin Dashboard (Optional)</option>
                <option value="Website"> Website </option>
                <option value="Application"> Application</option>
                <option value="Both">Both</option>
                <option value="Without Admin Panel">Without Admin Panel</option>
              </select>
              <br />
              <br />
              <select
                className="CheckOut-Select"
                value={coreLanguage}
                onChange={selectChange3}
              >
                <option value="">Core Programming Language (Optional)</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="Java">Java</option>
              </select>
              <br />
              <br />
              <select
                className="CheckOut-Select"
                value={language}
                onChange={selectChange4}
              >
                <option value="">Programming Language (Optional)</option>
                <option value="Only Front-End">Only Front-End</option>
                <option value="Only Back-End">Only Back-End</option>
                <option value="Front-End & Back-End">
                  Front-End & Back-End
                </option>
              </select>

              {language === "Only Front-End" && (
                <div className="CheckOut-Checkbox">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChange}
                  >
                    <p className="CheckOut-Checkbox-Text">For Front-End:</p>
                    <div className="CheckOut-Checkbox-MainDiv">
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="CSS">CSS</Checkbox>
                        <Checkbox value="HTLM">HTLM</Checkbox>
                        <Checkbox value="React Js">React Js</Checkbox>
                        <Checkbox value="Swift">Swift</Checkbox>
                        <Checkbox value="Express Js">Express Js</Checkbox>
                      </div>
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="Angular">Angular</Checkbox>
                        <Checkbox value="jQuery">jQuery</Checkbox>
                        <Checkbox value="Vue.js">Vue.js</Checkbox>
                        <Checkbox value="Bootstrap">Bootstrap</Checkbox>
                      </div>
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="Python">Python</Checkbox>
                        <Checkbox value="PHP">PHP</Checkbox>
                        <Checkbox value="Java">Java</Checkbox>
                        <Checkbox value="Git">Git</Checkbox>
                      </div>
                    </div>
                  </Checkbox.Group>
                </div>
              )}
              {language === "Only Back-End" && (
                <div className="CheckOut-Checkbox">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChange}
                  >
                    <p className="CheckOut-Checkbox-Text">For Back-End:</p>
                    <div className="CheckOut-Checkbox-MainDiv">
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="Python">Python</Checkbox>
                        <Checkbox value="C#">C#</Checkbox>
                        <Checkbox value="JavaScript">JavaScript</Checkbox>
                      </div>
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="NodeJS">NodeJS</Checkbox>
                        <Checkbox value="ExpressJS">ExpressJS</Checkbox>
                        <Checkbox value="MongoDB">MongoDB</Checkbox>
                      </div>
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="aws">aws</Checkbox>
                        <Checkbox value="MySQL">MySQL</Checkbox>
                        <Checkbox value="Firebase">Firebase</Checkbox>
                      </div>
                    </div>
                  </Checkbox.Group>
                </div>
              )}
              {language === "Front-End & Back-End" && (
                <div className="CheckOut-Checkbox">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChange}
                  >
                    <p className="CheckOut-Checkbox-Text">For Front-End:</p>
                    <div className="CheckOut-Checkbox-MainDiv">
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="CSS">CSS</Checkbox>
                        <Checkbox value="HTLM">HTLM</Checkbox>
                        <Checkbox value="React">React Js</Checkbox>
                        <Checkbox value="Swift">Swift</Checkbox>
                        <Checkbox value="Express Js">Express Js</Checkbox>
                      </div>
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="Angular">Angular</Checkbox>
                        <Checkbox value="jQuery">jQuery</Checkbox>
                        <Checkbox value="Vue.js">Vue.js</Checkbox>
                        <Checkbox value="Bootstrap">Bootstrap</Checkbox>
                      </div>
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="Python">Python</Checkbox>
                        <Checkbox value="PHP">PHP</Checkbox>
                        <Checkbox value="Java">Java</Checkbox>
                        <Checkbox value="Git">Git</Checkbox>
                      </div>
                    </div>

                    <p className="CheckOut-Checkbox-Text">For Back-End:</p>
                    <div className="CheckOut-Checkbox-MainDiv">
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="Python">Python</Checkbox>
                        <Checkbox value="C#">C#</Checkbox>
                        <Checkbox value="JavaScript">JavaScript</Checkbox>
                      </div>
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="NodeJS">NodeJS</Checkbox>
                        <Checkbox value="ExpressJS">ExpressJS</Checkbox>
                        <Checkbox value="MongoDB">MongoDB</Checkbox>
                      </div>
                      <div className="CheckOut-Checkbox-Div">
                        <Checkbox value="aws">aws</Checkbox>
                        <Checkbox value="MySQL">MySQL</Checkbox>
                        <Checkbox value="Firebase">Firebase</Checkbox>
                      </div>
                    </div>
                  </Checkbox.Group>
                </div>
              )}

              <br />
              <br />
              <select
                className="CheckOut-Select"
                value={newPackage}
                onChange={selectChange5}
              >
                <option value="">Package (Optional)</option>
                <option value="Basic">Basic (1-5 page up to 6 sections)</option>
                <option value="Standard">Standard (1 to 10 pages)</option>
                <option value="Premium">Premium (1 to 20 pages)</option>
                <option value="Custom Package">Custom Package</option>
              </select>
              {newPackage === "Custom Package" && (
                <div>
                  <br />
                  <Input
                    size="large"
                    placeholder="Custom Package"
                    allowClear
                    prefix={<FileProtectOutlined />}
                    type="text"
                    name="customPac"
                    value={customPac}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              <br />
              <br />
              <Input
                size="large"
                placeholder="Project Budget (Optional)"
                allowClear
                prefix={<DollarOutlined />}
                type="text"
                name="budget"
                value={budget}
                onChange={handleInputChange}
              />
              <br />
              <br />

              <TextArea
                showCount
                maxLength={500}
                placeholder="Project Details (Optional)"
                allowClear
                style={{
                  height: 120,
                  resize: "none",
                }}
                type="text"
                name="projectDetails"
                value={projectDetails}
                onChange={handleInputChange}
              />

              <div className="CheckOut-Button-Div">
                <button
                  className="CheckOut-Button"
                  onClick={() => {
                    setPage(0);
                  }}
                >
                  <LeftOutlined className="CheckOut-Button-Icon" />{" "}
                  <p className="CheckOut-Button-Text">Previous</p>
                </button>
                <Button
                  className="CheckOut-Button2"
                  onClick={showModal2}
                  danger
                >
                  <p className="CheckOut-Button-Text">Reset</p>
                </Button>
                <button
                  className="CheckOut-Button"
                  onClick={() => {
                    setPage(2);
                  }}
                >
                  <p className="CheckOut-Button-Text">Next</p>
                  <RightOutlined className="CheckOut-Button-Icon" />
                </button>
              </div>
              <Modal
                title="Confirm to Reset !"
                open={isModalOpen2}
                onOk={handleOk2}
                onCancel={handleCancel2}
              ></Modal>
            </div>
          ) : page === 2 ? (
            // Step: 3 (Overview)
            <div className="Check-BodyDiv">
              <p className="Check-Text2">Step: 3 (Overview)</p>

              <p>Basic Information</p>
              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Name: </p>
                <p className="Check-BodyBox-Text2">{name}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Email: </p>
                <p className="Check-BodyBox-Text2">{email}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Phone: </p>
                <p className="Check-BodyBox-Text2">{phone}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Address: </p>
                <p className="Check-BodyBox-Text2">{address}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Message: </p>
                <p className="Check-BodyBox-Text2">{message}</p>
              </div>

              <p>Project Proposal</p>
              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Apps Name: </p>
                <p className="Check-BodyBox-Text2">{appName}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Project Proposal: </p>
                <p className="Check-BodyBox-Text2">{projectProposal}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Application Type: </p>
                <p className="Check-BodyBox-Text2">{appType}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Admin Dashboard: </p>
                <p className="Check-BodyBox-Text2">{admin}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">
                  Core Programming Language:{" "}
                </p>
                <p className="Check-BodyBox-Text2">{coreLanguage}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Programming Language: </p>
                <p className="Check-BodyBox-Text2">{language}</p>
              </div>

              {newPackage === "Basic" && (
                <div className="Check-BodyBox-Div">
                  <p className="Check-BodyBox-Text">Package: </p>
                  <p className="Check-BodyBox-Text2">{newPackage}</p>
                </div>
              )}

              {newPackage === "Standard" && (
                <div className="Check-BodyBox-Div">
                  <p className="Check-BodyBox-Text">Package: </p>
                  <p className="Check-BodyBox-Text2">{newPackage}</p>
                </div>
              )}

              {newPackage === "Premium" && (
                <div className="Check-BodyBox-Div">
                  <p className="Check-BodyBox-Text">Package: </p>
                  <p className="Check-BodyBox-Text2">{newPackage}</p>
                </div>
              )}

              {newPackage === "Custom Package" && (
                <div className="Check-BodyBox-Div">
                  <p className="Check-BodyBox-Text">Custom Package: </p>
                  <p className="Check-BodyBox-Text2">{customPac}</p>
                </div>
              )}

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Project Budget: </p>
                <p className="Check-BodyBox-Text2">{budget}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Project Details: </p>
                <p className="Check-BodyBox-Text2">{projectDetails}</p>
              </div>

              <div className="CheckOut-Button-Div">
                <button
                  className="CheckOut-Button"
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  <LeftOutlined className="CheckOut-Button-Icon" />
                  <p className="CheckOut-Button-Text">Previous</p>
                </button>
                <Button
                  onClick={submit}
                  className="CheckOut-Button2"
                  type="primary"
                >
                  <p className="CheckOut-Button-Text">Submit</p>
                </Button>
                <button className="CheckOut-Button">
                  <p className="CheckOut-Button-Text">Next</p>
                  <RightOutlined className="CheckOut-Button-Icon" />
                </button>
              </div>
            </div>
          ) : page === 3 ? (
            // Step: 4 (Result)
            <div className="Check-BodyDiv">
              <Result
                status="success"
                title="Successfully Purchased."
                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                extra={[
                  <Button
                    type="primary"
                    onClick={() => {
                      setPage(0);
                    }}
                  >
                    Go Back
                  </Button>,
                ]}
              />
            </div>
          ) : (
            <h1> Error page</h1>
          )}
          <div className="Check-Steps-Div">
            <Steps
              size="small"
              current={page}
              items={[
                {
                  title: "Basic Information",
                },
                {
                  title: "Project Proposal",
                },
                {
                  title: "Overview",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
