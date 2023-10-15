
type GTagEvent = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
};

type GTagConfig = {
  page_path?: string;
  send_page_view?: boolean;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
      gtag: (
          command: 'config' | 'event' | 'js',
          targetId: string,
          params?: GTagEvent | GTagConfig
      ) => void;
  }
}

  