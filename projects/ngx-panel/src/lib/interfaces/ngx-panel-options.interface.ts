export interface NgxPanelOptions {
  container?: string | HTMLElement;
  content?: string | HTMLElement | (any);
  headerTitle?: string | HTMLElement;
  position?: string | {
    my: string,
    at: string
  };
}
