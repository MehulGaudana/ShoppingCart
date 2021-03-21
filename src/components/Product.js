import React, { Component } from 'react';

class Product extends Component
{
    state = {
        inCart: this.props.inCart
    }

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }

    render() {

        const { product } = this.props;

        return (
            <div className="col-md-3">
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img className="img-responsive" src={product.filename} width={product.width} height={product.height} />
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title"><strong>{product.title}</strong></h4>
                        <span><strong>Type:</strong> {product.type}</span>
                        <p className="desc"><b>Description:</b> {product.description}</p>
                        <p className="rating"><strong>Rating:</strong> {product.rating}</p>
                    </figcaption>
                    <div>

                    </div>
                    <div className="bottom-wrap">
                        {
                            this.state.inCart?(
                                <span className="btn btn-success">Added to cart</span>
                            ) : (
                                <a href="#" onClick={this.addToCart} className="btn btn-sm btn-primary float-right">Add to cart</a>
                            )
                        }

                        <div className="price-wrap h5">
                            <span className="price-new">Rs{product.price}</span>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }
}

export default Product;