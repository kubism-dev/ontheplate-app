import { Left, Right } from '@icon-park/react';

function SwipeNav() {
	return (
		<div className="swipe-nav">
			<div className="swipe-nav__item swipe-nav__item--left">
				<span>
					Swipe left to <span>dismiss</span>
				</span>
				<Left
					theme="filled"
					size="20"
					fill="#fff"
				/>
			</div>
			<div className="o-line o-line--extended"></div>
			<div className="swipe-nav__item swipe-nav__item--right">
				<Right
					theme="filled"
					size="20"
					fill="#fff"
				/>
				<span>
					Swipe right to <span>like</span>
				</span>
			</div>
		</div>
	);
}

export default SwipeNav;
