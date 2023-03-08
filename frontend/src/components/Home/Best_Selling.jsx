import axios from "axios";
import React, { PureComponent } from "react";
import "./Best_Selling.css"
import BestSellerCard from "./BestSellerCard";
class BestSelling extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            bestSelling: null
        }
    }
    componentDidMount() {
        let url = `https://pranav-github02.github.io/blinkfit-api/shop/clothing.json`
        axios.get(url)
            .then(response => {
                this.setState({ bestSelling: response.data.clothing })
            })
            .catch(error => console.error(error))
    }
    render() {
        let bestseller = <p>Loading.....</p>
        if (this.state.bestSelling != null) {
            bestseller = (
                <>
                    {
                        this.state.bestSelling.map((obj) =>
                            <BestSellerCard
                                key={obj.id}
                                id={obj.id}
                                title={obj.title}
                                image={obj.image}
                                desc={obj.desc}
                                price={obj.price}
                            />
                        )
                    }
                </>
            )
        }
        return (
            <div className="best_selling">
                <h2 className="title">BESTSELLER</h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}>
                    {bestseller}
                </div>
            </div>

        )
    }
}

export default BestSelling;