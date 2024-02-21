import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SectionHead from "../../Shared/Section Head/SectionHead";
import ProductCard from "../Review Card/ProductCard";

const Products = () => {




    const [products, setProducts] = useState([]);





    useEffect(() =>{

        axios.get(`http://localhost:5000/api/v1/products`)

        .then(res => setProducts(res.data))

    }, [] )


console.log(products);

    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4 space-y-8 md:space-y-12 lg:space-y-14">
                    <div>
                        <SectionHead SubTitle={'PRODUCTS'} Title={'OUR FEATURED PRODUCTS'} Description={"When you choose us, you'll feel the benefit of 10 years experience of Shopping. Because we know that how to handle it. With working knowledge of online, SEO and social media. "}></SectionHead>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            products.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;