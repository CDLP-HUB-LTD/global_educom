import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import navigationConfig from "../../_nav"; 
import "../../vibe/scss/styles.scss";
import { Link } from "react-router-dom";
import Button from "../../components/elements/Button";
import axios from "axios";

export const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = getUserIdFromSession();
        const response = await axios.get(`https://globaleducomm.com/api/users/user/${userId}`);
        const { user_fname, user_lname, user_email, user_phone } = response.data;
        setFormData({
          fname: user_fname,
          lname: user_lname,
          email: user_email,
          phone: user_phone,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      const userId = getUserIdFromSession();
      const response = await axios.put(`https://globaleducomm.com/api/users/user/:id`, formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error updating user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleItemExpansion = (index) => {
    setExpandedItems((prevItems) =>
      prevItems.includes(index)
        ? prevItems.filter((item) => item !== index)
        : [...prevItems, index]
    );
  };

  const getUserIdFromSession = () => {
    const userIdCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userId='));
    return userIdCookie ? userIdCookie.split('=')[1] : null;
  };
    return (
      <Container fluid>
        <Row>
          <Col md="3" style={{ height: "100vh" }} className="dashboard-sidebar bg-dark">
            <div className="mt-5">
              <Link to="/"><h3 className="my-5 text-light ms-3">GLOBAL<span><h3 className="d-inline text-success"> EDUCOM</h3></span></h3></Link>
            </div>
            <ul mainNav>
              {navigationConfig.top.map((item, index) => (
                <li className="text-warning" key={index}>
                  {item.children ? (
                    <div>
                      <Button
                        onClick={() => this.toggleItemExpansion(index)}
                      >
                        {item.name}
                      </Button>
                      {expandedItems.includes(index) && (
                        <ul>
                          {item.children.map((child, childIndex) => (
                            <li className="text-light" key={childIndex}>
                              <Link className="text-light navLnks" to={child.url}>
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link to={item.url}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </Col>
          <Col className="dashboard-content bg-success">
          <Col className="col-xl-8 mt-5 mx-auto">
            <div className="card mt-5">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="fname">
                        First name
                      </label>
                      <input
                        className="form-control"
                        name="fname"
                        type="text"
                        placeholder=""
                        value={formData.fname}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="lname">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        name="lname"
                        type="text"
                        placeholder=""
                        value={formData.lname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder=""
                      value={formData.email}
                      onChange={handleChange}
                      disabled
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="phone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        name="phone"
                        type="tel"
                        placeholder=""
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Button
                    className="mb-2 w-100"
                    onClick={handleUpdateProfile}
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Update Profile"}
                  </Button>
                </form>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
