import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetailComponent';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDish : null
    }
  }
  onDishSelect(dishId) {
    this.setState({
        selectedDish: dishId
    });
  }
  render () {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Món Ăn Ngon</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
            <Menu dishes={DISHES} onClick={(dishId) => this.onDishSelect(dishId)}/> 
            <DishDetail dish={DISHES.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        </div>
      </div>
    );
  }
}

export default Main;
