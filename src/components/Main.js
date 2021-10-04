import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import About from './AboutusComponent';
import {connect} from 'react-redux';
import {addComment ,fetchDishes ,fetchComments, fetchPromos} from '../redux/ActonCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state =>{
  return{
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  }
}

const mapDispatchToProps = (dispatch) =>({
  addComment : (dishId ,rating ,author ,comment) =>dispatch(addComment(dishId ,rating ,author ,comment)),
  //nhận 4 tham số như trên
  // gửi hành động đi
  fetchDishes : () =>{dispatch(fetchDishes())},
  resetFeedbackForm :()=>{dispatch(actions.reset("feedback"))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
})
class Main extends Component {
  constructor(props) {
    super(props)

  }
componentDidMount(){
  this.props.fetchDishes();
  this.props.fetchComments();
  this.props.fetchPromos();
}
  render () {

    const DishWithId = ({match}) => {
        console.log(match.params.dishId)
      return(
        <DishDetail
        dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
      //  dishes.dishes truy cap store
        dishLoading ={this.props.dishes.isLoading}
        dishErrMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}
        // add comment có quyền truy cập vào commetn kiểu thêm comment
        />
        
        )
    }

    const HomePage = () => {
        return(
            <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishLoading ={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promoLoading={this.props.promotions.isLoading}
                promoErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }

    return (
        <div className="container">
            <Header />
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus'
               component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));