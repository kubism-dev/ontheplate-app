import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getBookmarks,
	deleteBookmarks,
} from '../features/recipes/recipesSlice';
import { ForkSpoon, Share, Delete } from '@icon-park/react';

function Bookmarks() {
	const dispatch = useDispatch();
	const { bookmarks, count } = useSelector((state) => state.recipes);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		dispatch(getBookmarks());
	}, [dispatch]);

	const onDelete = (item) => {
		dispatch(deleteBookmarks(item));
		dispatch(getBookmarks());
	};

	const onClick = () => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			<div
				className="btn-bookmark"
				onClick={onClick}
			>
				<div className="btn-bookmark__inner">
					<ForkSpoon
						size={'1.75em'}
						theme="filled"
						fill="#101010"
					/>
					<div className="btn-bookmark__count">{count}</div>
				</div>
			</div>
			<div className={isVisible ? 'bookmarks is-visible' : 'bookmarks'}>
				<h4>Yummy, yummy… what goes in my tummy</h4>
				<ul className="bookmarks__list">
					{bookmarks &&
						JSON.parse(bookmarks).map((bookmark, index) => (
							<li
								class="bookmarks__list-item"
								key={index}
							>
								<img
									src={bookmark.image}
									alt={bookmark.name}
								/>
								<a
									href={bookmark.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{bookmark.name}
								</a>
								<div>
									<button onClick={() => onDelete(bookmark.name)}>
										<Delete
											size={'1.3em'}
											fill="#101010"
										/>
									</button>
								</div>
							</li>
						))}
				</ul>
			</div>
		</>
	);
}

export default Bookmarks;
