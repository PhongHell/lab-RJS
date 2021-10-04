import React, { useState ,Component} from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem,Col,
     Row, ModalBody, Modal, Label, Button, ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';




const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
function RenderDish({dish}) {
    return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
    );
}

function RenderComment({comments}) {
    const Comments = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </div>
        )
    })
    return (
      <div>
        <h4>Comments</h4>
        {Comments}
      </div>
    );
}
class CommentForm extends Component{

    constructor(props){
      super(props)
  
     
    }
  
    handleSubmit = (values) =>{
      console.log(values);
      //value ddc cung cấp như giá trị được sử lý
      this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
    }
  
      render(){
          return (
            <Modal
              isOpen={this.props.isModalOpen}
              toggle={() => this.props.setModalOpen(!this.props.isModalOpen)}
            >
              <ModalHeader
                isOpen={this.props.isModalOpen}
                toggle={() => this.props.setModalOpen(!this.props.isModalOpen)}
              >
                Submit comment
              </ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <Row className="form-group">
                    <Label htmlFor="rating" md={2}>
                      Rating
                    </Label>
                    <Col md={9}>
                      <Control.select
                        model=".rating"
                        id="rating"
                        name="rating"
                        className="form-control"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Control.select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="name" md={2}>
                      Name
                    </Label>
                    <Col md={9}>
                      <Control.text
                        model=".name"
                        id="name"
                        name="name"
                        className="form-control"
                        validators={{ required, minLength: minLength(3), maxLength: maxLength(15)}}
                      />
                      <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        required: 'required',
                        minLength: "Must be greater than 3 characters",
                        maxLength: "Must be 15 characters or less"
                      }}></Errors>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="comment" md={2}>
                      Comment
                    </Label>
                    <Col md={9}>
                      <Control.textarea
                        rows="6"
                        model=".comment"
                        id="comment"
                        name="comment"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={{ size: 2, offset: 2 }}>
                      <Button
                        type="submit"
                        value="submit"
                        color="primary"
                        
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </LocalForm>
              </ModalBody>
            </Modal>
          );
      }
  }
const DishDetail = (props) => {

    const [isModalOpen, setModalOpen] = useState(false);

    if (props.dish) {
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <div>
                        <RenderComment comments={props.comments} />
                        <Button outline onClick={() => setModalOpen(!isModalOpen)} className="bg-light">
                            <span className="fa fa-sign-in fa-lg"></span> Submit comment
                        </Button>
                        <CommentForm isModalOpen={isModalOpen} setModalOpen={setModalOpen} dishId={props.dish.id} addComment={props.addComment}/>
                    </div>
                </div>
            </div>
            </div>
        );
    } else {
      return <div></div>;
    }
}

export default DishDetail;