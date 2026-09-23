import { toPng } from 'html-to-image';

/**
 * Captures an HTML element and triggers a high-resolution PNG image download
 */
export async function downloadElementAsPng(
  elementId: string,
  fileName: string = 'Birol-Upazila-Chhatra-Kalyan-Samiti-Invitation-2026.png'
): Promise<boolean> {
  const node = document.getElementById(elementId);
  if (!node) {
    console.error(`Element with id "${elementId}" not found for image export`);
    return false;
  }

  try {
    // Generate high-resolution PNG with exact scroll dimensions so bottom is never truncated
    const rect = node.getBoundingClientRect();
    const width = Math.ceil(node.scrollWidth || rect.width);
    const height = Math.ceil(node.scrollHeight || rect.height);

    const dataUrl = await toPng(node, {
      quality: 0.98,
      pixelRatio: 2,
      canvasWidth: width * 2,
      canvasHeight: height * 2,
      cacheBust: true,
      backgroundColor: '#fdfbf7',
      style: {
        transform: 'none',
        margin: '0',
        maxHeight: 'none',
      },
      filter: (domNode) => {
        // Exclude elements with 'no-print' or 'no-export' class
        if (domNode instanceof HTMLElement && domNode.classList.contains('no-export')) {
          return false;
        }
        return true;
      },
    });

    // Create trigger link to download
    const link = document.createElement('a');
    link.download = fileName;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('Error generating card image:', error);
    // Fallback: try standard canvas scale
    try {
      const fallbackUrl = await toPng(node, {
        quality: 0.95,
        pixelRatio: 1.5,
        backgroundColor: '#fdfbf7',
      });
      const link = document.createElement('a');
      link.download = fileName;
      link.href = fallbackUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return true;
    } catch (fallbackError) {
      console.error('Fallback image export also failed:', fallbackError);
      return false;
    }
  }
}
