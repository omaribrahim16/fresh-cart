export default async function getAllSubCategories(id: string) {
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`)
    const { data } = await response.json();

    return data;
}