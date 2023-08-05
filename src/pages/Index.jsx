import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TinderCard from 'react-tinder-card';
import {
	getRecipes,
	setBookmarks,
	getBookmarks,
} from '../features/recipes/recipesSlice';

function Index() {
	const dispatch = useDispatch();
	const { recipes } = useSelector((state) => state.recipes);

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	const [lastDirection, setLastDirection] = useState();

	const swiped = (direction, nameToDelete) => {
		if (direction === 'right') {
			dispatch(setBookmarks(nameToDelete));
			dispatch(getBookmarks());
		}
		setLastDirection(direction);
	};

	const outOfFrame = (name) => {
		console.log(name + ' left the screen!');
	};

	return (
		<>
			<div className="main-wrap">
				<div className="card">
					{recipes.map((recipe) => (
						<TinderCard
							className="swipe"
							key={recipe.recipe.label}
							onSwipe={(dir) =>
								swiped(dir, {
									name: recipe.recipe.label,
									url: recipe.recipe.url,
									image: recipe.recipe.image,
								})
							}
							onCardLeftScreen={() => outOfFrame(recipe.recipe.label)}
						>
							<div className="card__item">
								<div className=""></div>
								<h2 className="card__item-title">{recipe.recipe.label}</h2>
								<img
									className="card__item-img"
									src={recipe.recipe.image}
									alt={recipe.recipe.label}
								/>
								<div className="card__item-desc">
									<div className="desc__item">
										<h3>Servings</h3>
										<span>for {recipe.recipe.yield}</span>
									</div>
									<div className="desc__item">
										<h3>Meal Type</h3>
										<span>{recipe.recipe.mealType}</span>
									</div>
									<div className="desc__item">
										<h3>Time needed</h3>
										<span>{recipe.recipe.totalTime} min.</span>
									</div>
								</div>
							</div>
						</TinderCard>
					))}
				</div>
			</div>
			{lastDirection === 'right' ? (
				<h2 className="infoText"> Added to Recipes</h2>
			) : (
				''
			)}
		</>
	);
}

export default Index;
