export const fetchRecipes = async () => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q="*"&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_SECRET}&imageSize=REGULAR`;
  const response = await fetch(url);
  return response.json();
};

export const fetchBookmarks = async () => localStorage.getItem('plateRecipes');

// If Item doesn't exist, create new Array and push new Item to Array
export const saveBookmarks = async (name, link) => {
  let newBookmarks;
  if (localStorage.getItem('plateRecipes') === null) {
    newBookmarks = [];
  } else {
    let bookmarks = JSON.parse(localStorage.getItem('plateRecipes')) || null;
    newBookmarks = bookmarks;
  }
  newBookmarks.push({ name, link });
  localStorage.setItem('plateRecipes', JSON.stringify(newBookmarks));
};

// Filter Item and save copy without Item in Array
export const removeBookmarks = async (name) => {
  let newBookmarks;
  let bookmarks = JSON.parse(localStorage.getItem('plateRecipes')) || null;
  newBookmarks = bookmarks.filter((bookmark) => bookmark.name !== name);
  localStorage.setItem('plateRecipes', JSON.stringify(newBookmarks));
};
