import React, { useEffect, useState } from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import navigationConfig from "../../_nav";
import "../../vibe/scss/styles.scss";
import { Link } from "react-router-dom";
import Button from "../../components/elements/Button";
import { useQuery } from 'react-query';
import axios from "axios";


const fetchUserData = async (key, userId) => {
  try {
    console.log('userId in fetchUserData:', userId);

    if (!userId) {
      return { loading: true };
    }

    const response = await axios.get(`https://globaleducomm.com/api/users/user/${userId}`);
    console.log('API Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
};



export const Dashboard = ({ auth }) => {
  const userId = auth.userId;

  return (
    <div>
      {userId !== null ? (
        <h1>Welcome, User {userId}</h1>
      ) : (
        <p>Please log in to view this page.</p>
      )}
    </div>
  );
};


// export const Dashboard = ({ auth }) => {
//   const { userId } = auth;
//   const [expandedItems, setExpandedItems] = useState([]);
//   const { data: userData, isLoading, isError } = useQuery(
//     ['user', userId],
//     fetchUserData,
//     {
//       enabled: !!userId,
//       staleTime: 10000, 
//     }
//   );

//   console.log("userId in Dashboard:", userId);
//   console.log("userData in Dashboard:", userData);

//   const [firstName, setFirstName] = useState("");

//   useEffect(() => {
//     console.log('Inside useEffect - Dashboard userData:', userData);
  
//     if (userData && userData.data && userData.data.length > 0) {
//       const { user_fname } = userData.data[0];
//       setFirstName(user_fname);
//     }
//   }, [userData]);
  

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading user data.</div>;
//   }

//   console.log('Dashboard userData:', userData);
//   console.log('firstName in Dashboard:', firstName);

//   const toggleItemExpansion = (index) => {
//     setExpandedItems((prevExpandedItems) => {
//       if (prevExpandedItems.includes(index)) {
//         return prevExpandedItems.filter((item) => item !== index);
//       } else {
//         return [...prevExpandedItems, index];
//       }
//     });
//   };

//   const heroStyles = {
//     padding: "50px 0 70px",
//   };
//   return (
//     <Container fluid>
//       <Row>
//         <Col md="3" style={{ height: "100vh" }} className="dashboard-sidebar bg-dark">
//           <div className="mt-5">
//             <Link to="/"><h3 className="my-5 text-light ms-3">GLOBAL<span><h3 className="d-inline text-success"> EDUCOM</h3></span></h3></Link>
//           </div>
//           <ul mainNav>
//             {navigationConfig.top.map((item, index) => (
//               <li className="text-warning" key={index}>
//                 {item.children ? (
//                   <div>
//                     <Button
//                       onClick={() => toggleItemExpansion(index)}
//                     >
//                       {item.name}
//                     </Button>
//                     {expandedItems.includes(index) && (
//                       <ul>
//                         {item.children.map((child, childIndex) => (
//                           <li className="text-light" key={childIndex}>
//                             <Link className="text-light navLnks" to={child.url}>
//                               {child.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 ) : (
//                   <Link to={item.url}>{item.name}</Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </Col>
//         <Col md="9" className="dashboard-content bg-success">
//           <Row>
//             <Col md={6}>
//               <div className="home-hero" style={heroStyles}>
//                 <h1 className="text-light">Welcome, {firstName}</h1>
//                 <p className="text-dark">
//                   Discover the resources that will help speed up
//                   your next research project.
//                 </p>
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={6}>
//               <Card>
//                 <CardBody className="display-flex">
//                   <div className="m-l">
//                     <h2 className="h4">My Resources
//                       <span>
//                         <h4 className="text-muted d-inline"> &emsp; 3</h4>
//                       </span>
//                     </h2>
//                     <ul>
//                       <li className="navLnks mb-3">
//                         <span>
//                           <img src={require("../../assets/images/gallery/data.jpg")} width="20%" alt="resources" />&emsp;
//                           <Link to="#!" className="text-dark"> Prediction and Classification of COVID-19 Death and Recovered cases using ML</Link>
//                         </span>
                        
//                       </li>
//                       <li className="navLnks mb-3">
//                         <span>
//                           <img src={require("../../assets/images/gallery/pm.jpg")} width="20%" alt="resources" />&emsp;
//                         <Link to="#!" className="text-dark">Stakeholder Approach to Successful Adoption of Projects</Link>
//                         </span>
//                       </li>
//                       <li className="navLnks">
//                         <span>
//                           <img src={require("../../assets/images/gallery/lang.jpg")} width="20%" alt="resources" />&emsp;
//                         <Link to="#!" className="text-dark">Analyzing language attrition among most English speakers</Link>
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col md={6}>
//               <Card>
//                 <CardBody className="display-flex">
//                   <div className="m-l">
//                     <h2 className="h4">Similar Resources</h2>
//                     <ul>
//                       <li className="navLnks mb-3">
//                         <span>
//                           <img src={require("../../assets/images/gallery/data.jpg")} width="20%" alt="resources" />&emsp;
//                           <Link to="#!" className="text-dark"> Prediction and Classification of COVID-19 Death and Recovered cases using ML</Link>
//                         </span>
                        
//                       </li>
//                       <li className="navLnks mb-3">
//                         <span>
//                           <img src={require("../../assets/images/gallery/pm.jpg")} width="20%" alt="resources" />&emsp;
//                         <Link to="#!" className="text-dark">Stakeholder Approach to Successful Adoption of Projects</Link>
//                         </span>
//                       </li>
//                       <li className="navLnks">
//                         <span>
//                           <img src={require("../../assets/images/gallery/lang.jpg")} width="20%" alt="resources" />&emsp;
//                         <Link to="#!" className="text-dark">Analyzing language attrition among most English speakers</Link>
//                         </span>
//                       </li>                        
//                     </ul>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col md={12}>
//               <Card>
//                 <CardBody className="display-flex">
//                   <div className="m-l">
//                     <h2 className="h4">Current Plan
//                       <span>
//                         <h4 className="text-muted d-inline"> &emsp; FREE</h4>
//                       </span>
//                     </h2>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// }
