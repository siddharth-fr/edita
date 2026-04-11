/**
 * Google Analytics 4 tracking utility
 */

export const GA_MEASUREMENT_ID = 'G-R9PHS8S8ZD';

// Declaring gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, string | number | boolean | undefined | null>
    ) => void;
  }
}

/**
 * Send a custom event to GA4
 */
export const trackEvent = (eventName: string, params: Record<string, string | number | boolean | undefined | null> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  } else {
    console.debug(`[GA4] Event ${eventName} skipped (gtag not found)`, params);
  }
};

/**
 * Track when a tool is used
 */
export const trackToolUsed = (toolName: string) => {
  trackEvent('tool_used', {
    tool_name: toolName,
  });
};

/**
 * Track file uploads
 */
export const trackFileUploaded = (fileType: string, fileSize?: number) => {
  trackEvent('file_uploaded', {
    file_type: fileType,
    file_size: fileSize,
  });
};

/**
 * Track file downloads
 */
export const trackFileDownloaded = (toolName: string, fileType: string) => {
  trackEvent('file_downloaded', {
    tool_name: toolName,
    file_type: fileType,
  });
};

/**
 * Track when a tool is selected (clicked from a list/grid)
 */
export const trackToolSelected = (toolName: string, source: string = 'grid') => {
  trackEvent('tool_selected', {
    tool_name: toolName,
    source: source,
  });
};

/**
 * Track key conversions (e.g., successful processing)
 */
export const trackConversion = (toolName: string) => {
  trackEvent('conversion', {
    tool_name: toolName,
    send_to: `${GA_MEASUREMENT_ID}/conversion_event`, // Optional: custom label if needed
  });
};
