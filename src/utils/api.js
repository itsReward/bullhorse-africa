export async function getDatabase() {
    try {
        const response = await fetch('./src/data/db.json');
        if (!response.ok) throw new Error('Failed to load database');
        return await response.json();
    } catch (error) {
        console.error(error);
        return { products: [], awards: [] }; // Return empty structure on fail
    }
}
