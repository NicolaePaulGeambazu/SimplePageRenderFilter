import { useState} from 'react'; 
import jsonData from '../../data.json';
import Card from '../Card/Card';
import useSort from '../customHooks/useSort';
import Toggle from '../Toggle/Togge';
import Search from '../SearchBar/SearchBar';
import useFilter from '../customHooks/useFilter';
import { ProductsWrapper, WrapperHeader, WrapperProductsList } from './Products.style';


const Products = () => {
    const [allProducts, setAllProducts] = useState(false);
    const productsData = useSort(jsonData, allProducts);
    const { filteredData, setSearchTerm } = useFilter(productsData);

    const dataToMapOver = allProducts ? productsData : filteredData;

    return (
        <ProductsWrapper>
            <WrapperHeader>
                <Search setSearchTerm={setSearchTerm} />
                <Toggle setAllProducts={setAllProducts} allProducts={allProducts} />
            </WrapperHeader>
            <WrapperProductsList>
                {dataToMapOver.length ?
                 <>{dataToMapOver.map((product, index) => (
                <Card key={index} product={product} />
            ))}</> : <div>No Products..</div>}
            </WrapperProductsList>
        </ProductsWrapper>
    );
}

export default Products;
