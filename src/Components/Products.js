import useProduct from "./Hooks/useProduct";
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useProduct([]);
    return (
        <>
            <section className="p-7">
                <h1 className="text-center text-primary-focus text-3xl font-bold">Products</h1>
                <div className="grid gap-8 pt-8 mx-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Product key={products._id} product={product} />
                    )).reverse().slice(0, 6)}
                </div>
            </section>
        </>
    );
};

export default Products;