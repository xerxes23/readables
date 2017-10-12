export const SET_CATEGORIES = 'SET_CATEGORIES';
export const CATEGORIES_ARE_LOADING = 'CATEGORIES_ARE_LOADING';

export const setCategories = categories => ({
    type: SET_CATEGORIES,
    categories
});


export const categoriesAreLoading = value => ({
    type: CATEGORIES_ARE_LOADING,
    value
});