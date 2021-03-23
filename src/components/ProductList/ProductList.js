import React, { Component } from 'react'
import Product from './Product'
import Loading from './Loading'
import './productList.css'
import { connect } from 'react-redux'
import { getAllProducts } from '../../redux/productsReducer'

class ProductList extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    return (
      <div className="products-list">
          {this.props.isLoading ? <Loading /> : (
            this.props.products.map(elem => {
              return <Product key={elem.id} data={elem}/>
            })
          )}
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState.productsReducer

export default connect(mapStateToProps, {getAllProducts})(ProductList)
