import React, { Component } from 'react'
import {Breadcrumb, BreadcrumbItem, Button,  Label, Col ,FormFeedback,Row} from 'reactstrap';
// chú ý button
import {Link} from 'react-router-dom';
import { Field } from 'react-redux-form';
import {Control ,LocalForm ,Errors} from 'react-redux-form'

const required = (val) => val&&val.length;
const maxLength = (len) =>(val) => !(val)|| (val.length <= len);
const minLength = (len) =>(val) => (val)&& (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>   /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i.test(val);
export default class Contact extends Component {
    constructor(props){
        super(props);
       
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleSubmit(values){
        console.log("current state :" + JSON.stringify(values));
        alert("current state :" + JSON.stringify(values));
       
    }
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us Test</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label md={2} for="firstname">First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                     placeholder="firstName"
                                     className = "form-control"
                                     validators ={{
                                        required , minLength :minLength(3),maxLength : maxLength(15)
                                     }  
                                     }
                                    /> 
                                <Errors 
                                className="text-danger"
                                model=".firstname"
                                show ="touched"
                                messages ={{
                                    required : "required ",
                                    minLength : "must be greater than 3 character",
                                    maxLength : "must be 15 character or less"
                                    // cach chi dinh tin nhan
                                } 
                                }
                                />
   
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} for="lastname">Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                     className = "form-control"
                                     placeholder="lastname"
                                     validators ={{
                                        required , minLength :minLength(3),maxLength : maxLength(15)
                                     }  
                                     }
                                    /> 
                                     <Errors 
                                className="text-danger"
                                model=".lastname"
                                show ="touched"
                                messages ={{
                                    required : "required ",
                                    minLength : "must be greater than 3 character",
                                    maxLength : "must be 15 character or less"
                                    // cach chi dinh tin nhan
                                } 
                                }
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} for="telnum" htmlFor="telnum">Tel Number</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                    className = "form-control"
                                     placeholder="telnum"
                                     validators ={{
                                        required , minLength :minLength(3),maxLength : maxLength(15),isNumber
                                     }  
                                     }
                                    /> 
                                     <Errors 
                                className="text-danger"
                                model=".telnum"
                                show ="touched"
                                messages ={{
                                    required : "required ",
                                    minLength : "must be greater than 3 numbers",
                                    maxLength : "must be 15 number or less",
                                    isNumber : "telNum should be number character"
                                    // cach chi dinh tin nhan
                                } 
                                }
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="email">Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                     placeholder="email"
                                     validators ={{
                                        required , validEmail
                                     }  
                                     }
                                    /> 
                                   <Errors 
                                className="text-danger"
                                model=".email"
                                show ="touched"
                                messages ={{
                                    required : "required ",
                                   validEmail : 'must be is a @'
                                    // cach chi dinh tin nhan
                                } 
                                }
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset: 2}}>
                                    {/* chiếm 6 cột bù đắp sang phải 2 cột nếu thừa */}
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" 
                                                name="agree"
                                                className="form-check-input"/> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size :3,offset:1}}>
                                <Control.select model=".contactType" name="contactType"
                                          className="form-control"  >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                        <option>facebook</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="message">Your feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                     placeholder="" rows={12}
                                     className="form-control"
                                    /> 
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary" >
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        )
    }
}
