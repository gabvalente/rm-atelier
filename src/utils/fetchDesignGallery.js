const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL || 'http://localhost:1337';

function optimizeCloudinaryUrl(url, maxWidth = 300, quality = 'auto:good', format = 'auto') {
    // Optimizing for performance with aggressive quality compression
    return url.replace('/upload/', `/upload/w_${maxWidth},c_limit,f_${format},q_${quality}/`);
}

export async function fetchDesignGallery() {
    const response = await fetch(`${API_BASE_URL}/api/design-items?populate=*`);
    if (!response.ok) {
        console.error('Failed to fetch design gallery:', response.statusText);
        return [];
    }
    const data = await response.json();
    const galleryItems = data.data || [];

    // Apply Cloudinary optimizations to each image URL
    return galleryItems.map(item => {
        if (item.attributes.coverImage?.data) {
            item.attributes.coverImage.data.attributes.url = optimizeCloudinaryUrl(item.attributes.coverImage.data.attributes.url);
        }
        return item;
    });
}
