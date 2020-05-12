import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };
  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="col-sm-4 mb-4">
          <div
            className="card"
            key={item.id}
            style={{
              width: "100%",
            }}
          >
            <img className="card-img-top" src={item.img} alt={item.title}></img>
            <div className="card-body">
              <p className="text-center">Price: {item.price}$</p>
              <button
                className="btn btn-block btn-dark"
                onClick={() => {
                  this.handleClick(item.id);
                }}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header bg-white">
                <h3 className="text-center">Our items</h3>
              </div>
              <div className="card-body">
                <div className="row">{itemList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
