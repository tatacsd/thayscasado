

declare global {
  interface Window {
    gtag?: (key: string, eventName: string, eventData: Record<string, unknown>) => void;
  }
}




// Function to track events with GA4
export const trackEvent = (eventName: string, eventData: Record<string, unknown>): void => {
    if (window.gtag) {
      window.gtag('event', eventName, eventData);
    } else {
      console.warn('gtag not available');
    }
  };
  
  // You can create other specialized functions as needed. For example:
  
  export const trackButtonClick = (buttonName: string, value?: number): void => {
    trackEvent("button_click", {
      "button_name": buttonName,
      "value": value
    });
  };
  