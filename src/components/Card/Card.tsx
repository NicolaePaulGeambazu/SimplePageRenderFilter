import { CardWrapper } from './Card.style';

interface CardProps {
    product: {
        name: string;
        price: number
    };
}
const Card = ({ product}: CardProps) => {
    return (
        <CardWrapper>
            <div><strong>Product Name:</strong> {product?.name}</div>
            <div><b>Price: </b>{product?.price}</div>
        </CardWrapper>
    )
}

export default Card;