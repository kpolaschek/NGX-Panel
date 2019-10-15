export interface NgxPanel {
  reposition(position: string): NgxPanel;
  setBorderRadius(value: number | string): NgxPanel;
  setHeaderTitle(title: string): NgxPanel;
}
