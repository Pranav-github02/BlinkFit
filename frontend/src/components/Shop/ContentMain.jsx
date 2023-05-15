import React, { PureComponent } from "react";
import axios from "axios"
import ContentMainCard from "./ContentMainCard";

class ContentMain extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            items: null
        }
    }
    componentDidMount() {
        console.log(this.props.category);
        let url = `http://localhost:5000/shop/${this.props.category}`
        axios.get(url)
            .then(res => {
                const shuffledItems = res.data.sort(() => Math.random() - 0.5);
                this.setState({ items: shuffledItems })
            })
            .catch(err => console.error(err))
    }
    render() {
        let products = <p>Loading.....</p>
        if (this.state.items != null) {
            products = (
                <>
                    {
                        this.state.items.map((obj) =>
                            <ContentMainCard
                                key={obj.id}
                                title={obj.title}
                                desc={obj.desc}
                                price={obj.price}
                                image={obj.image}
                                qty={obj.qty}
                                size={obj.size}
                            />
                        )
                    }
                </>
            )
        }
        return (
            <div className='products-list' >
                <ul className='products row'>
                    {products}
                </ul>
            </div>
        )
    }
}

export default ContentMain