export type TabStepper = {
  title: string;
  key: string;
  status: 'init' | 'updated' | 'completed';
  order: number;
  isHide: boolean;

  // optional
  description: string;
};
