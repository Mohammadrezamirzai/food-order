import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    const mealToAdd = {
      id: meal.id,
      name: meal.name,
      price: meal.price,
      image: meal.image
    };
    console.log('Adding meal to cart:', mealToAdd);
    cartCtx.addItem(mealToAdd);
  }

  const itemInCart = cartCtx.items.find((item) => item.id === meal.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>
            {quantity > 0 ? `Add to Cart (${quantity})` : 'Add to Cart'}
          </Button>
        </p>
      </article>
    </li>
  );
}
