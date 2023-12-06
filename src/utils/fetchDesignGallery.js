const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL || 'http://localhost:1337';

export async function fetchDesignGallery() {
    const response = await fetch(`${API_BASE_URL}/api/design-items?populate=*`);
    if (!response.ok) {
        console.error('Failed to fetch design gallery:', response.statusText);
        return [];
    }
    const data = await response.json();
    return data.data || [];
}
