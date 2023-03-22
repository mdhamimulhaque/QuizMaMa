export const getCategoryData = async () => {
    const url = "https://opentdb.com/api_category.php"
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getQuizzesData = async (formData) => {
    const url = `https://opentdb.com/api.php?amount=10&category=${formData?.category}&difficulty=${formData?.level}&type=multiple`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}