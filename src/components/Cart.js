import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./actions/cartActions";
import Recipe from "./Recipe";

class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="col-sm-12">
            <div className="card-body" key={item.id}>
              <div className="row">
                <div className="col-sm-3">
                  <img
                    src={item.img}
                    alt={item.img}
                    className=""
                    width="100%"
                  />
                </div>
                <div className="col-sm 9">
                  <div>{item.title}</div>
                  <p>{item.desc}</p>
                  <p>
                    <b>Price: {item.price}$</b>
                  </p>
                  <p>
                    <b>Quantity: {item.quantity}</b>
                  </p>
                  <div className="add-remove mb-1">
                    <Link
                      to="/cart"
                      className="btn btn-secondary btn-sm mr-1"
                      onClick={() => {
                        this.handleAddQuantity(item.id);
                      }}
                    >
                      Up
                    </Link>
                    <Link
                      to="/cart"
                      className="btn btn-secondary btn-sm"
                      onClick={() => {
                        this.handleSubtractQuantity(item.id);
                      }}
                    >
                      Down
                    </Link>
                  </div>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => {
                      this.handleRemove(item.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container mt-2">
        <div className="card">
          <div className="card-header bg-white">
            <h3 className="text-center">You have ordered:</h3>
          </div>
          <div className="card-body">
            <div className="row">{addedItems}</div>
          </div>
          <Recipe />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
