/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";


const randomImages = [
  require('assets/img/bg1.jpg'),
  require('assets/img/bg2.jpg'),
  require('assets/img/bg3.jpg'),
  require('assets/img/bg4.jpg'),
  require('assets/img/bg5.jpg'),
  require('assets/img/bg6.jpg'),
  require('assets/img/bg7.jpg'),
  ];

const getBackground = () => {
  return randomImages[Math.floor(Math.random() * 7)]
}

const members = [
  {
    'name': 'Pranshu Yadav',
    'batch': 'CSAM 2021',
    'description': 'You were my cup of tea, but I drink coffee now',
    'linkedin': 'https://www.linkedin.com/in/pranshu-yadav-63b30418b/',
    'github': 'https://github.com/pranshu17254',
    'email': 'pranshu17254@iiitd.ac.in',
    'picture': 'pranshu.jpeg'
  },
  {
    'name': 'Kartik Rajpal',
    'batch': 'ECE 2021',
    'description': 'You were my cup of tea, but I drink coffee now',
    'linkedin': '',
    'github': '',
    'email': 'kartik17157@iiitd.ac.in',
    'picture': 'kartikr.jpg'
  },
  {
    'name': 'Pavni Aggarwal',
    'batch': 'CSAM 2021',
    'description': 'You were my cup of tea, but I drink coffee now',
    'linkedin': 'https://www.linkedin.com/in/pavni-aggarwal-aa3759151',
    'github': 'https://github.com/PavniAggarwal',
    'email': 'pavniagg@gmail.com',
    'picture': 'pavni.jfif'
  },

  {
    'name': 'Lakshay Sharma',
    'batch': 'CSAM 2021',
    'description': 'Some bio text goes here...',
    'linkedin': 'https://www.linkedin.com/in/voila81116/',
    'github': 'https://github.com/lakshay17244',
    'email': 'lakshay.sharma10@gmail.com',
    'picture': 'lakshay.jfif'
  },
  {
    'name': 'Dipanshu Yadav',
    'batch': 'CSAM 2021',
    'description': 'You were my cup of tea, but I drink coffee now',
    'linkedin': 'https://www.linkedin.com/in/dipanshu-yadav-aaa2ab186/',
    'github': 'https://github.com/dipanshu17229',
    'email': 'raoprinceyadav7@gmail.com',
    'picture': 'dipanshu.jpg'
  },
  {
    'name': 'Mohit Singh',
    'batch': 'CSAM 2021',
    'description': 'You were my cup of tea, but I drink coffee now',
    'linkedin': 'https://www.linkedin.com/in/mohit-singh-714b3616b/',
    'github': 'https://github.com/mohit860',
    'email': 'ms9480681@gmail.com',
    'picture': 'mohit.jfif'
  }
  ,
  {
    'name': 'Aayush Baghel',
    'batch': 'CSAM 2021',
    'description': 'You were my cup of tea, but I drink coffee now',
    'linkedin': 'https://www.linkedin.com/in/aayush-baghel-50006b153/',
    'github': '',
    'email': 'aayushkb@gmail.com',
    'picture': 'aayush.jpg'
  },
  {
    'name': 'Sounak Gupta',
    'batch': 'CSD 2021',
    'description': 'You were my cup of tea, but I drink coffee now',
    'linkedin': 'https://www.linkedin.com/in/sounak-gupta-1b23831a1/',
    'github': '',
    'email': 'sounak17317@iiitd.ac.in',
    'picture': 'sounak.jpeg'
  },
  {
    'name': 'Sejal Singh',
    'batch': 'CSB 2021',
    'description': 'You were my cup of tea, but I drink coffee now',
    'linkedin': '',
    'github': 'https://github.com/sejalsingh00',
    'email': 'sejallaur@gmail.com',
    'picture': 'sejal.jpg'
  },
  {
    'name': 'Kartik Verma',
    'batch': 'ECE 2021',
    'description': 'You were my cup of tea, but I drink coffee now',
    'linkedin': '',
    'github': '',
    'email': 'kartik17158@iiitd.ac.in',
    'picture': 'default-avatar.png'
  }
]

class User extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            {/* <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue="Creative Code Inc."
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue="michael23"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue="Mike"
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Andrew"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue="Mike"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="Andrew"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            */}
            {members.map(user => {
              return (
                <Col sm='6' md="4" lg='4'>
                  <Card className="card-user">
                    <div className="image">
                      <img alt="..." src={require('assets/img/bg2.jpg')} />
                    </div>
                    <CardBody style={{ 'min-height': '100px' }}>
                      <div className="author">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar border-gray"
                            src={require('assets/img/' + user.picture)}
                          />
                          <h5 className="title">{user.name}</h5>
                        </a>
                        <p className="description"><b><i>{user.batch}</i></b></p>
                      </div>
                      {/* <p className="description text-center">
                        {user.description}
                      </p> */}
                    </CardBody>
                    <hr />
                    <div className="button-container">

                      {user.linkedin &&
                        <Button
                          className="btn-neutral btn-icon btn-round"
                          color="default"
                          href={user.linkedin}
                          target="_blank"
                          // onClick={(e) => e.preventDefault()}
                          size="lg"
                        >
                          <i className="fab fa-linkedin" />
                        </Button>
                      }
                      {
                        user.github &&
                        <Button
                          className="btn-neutral btn-icon btn-round"
                          color="default"
                          href={user.github}
                          // onClick={(e) => e.preventDefault()}
                          target="_blank"
                          size="lg"
                        >
                          <i className="fab fa-github" />
                        </Button>
                      }

                      {user.email &&
                        <Button
                          className="btn-neutral btn-icon btn-round"
                          color="default"
                          href={`mailto: ${user.email}`}
                          target="_blank"
                          // onClick={(e) => e.preventDefault()}
                          size="lg"
                        >
                          <i className="fab fa-google-plus-g" />
                        </Button>}


                    </div>
                  </Card>
                </Col>
              )
            })}

          </Row>
        </div>
      </>
    );
  }
}

export default User;
