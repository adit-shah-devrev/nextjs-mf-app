type FlexDisplay = {
  type: 'flex';
  direction: 'row' | 'column';
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

type GridDisplay = {
  type: 'grid';
  templateColumns: string;
  templateRows: string;
};

export type Styles = {
  layout: Partial<FlexDisplay | GridDisplay>;
  display: Partial<{
    height: string;
    width: string;
    padding: string;
  }>;
};

export type Component = {
  type: 'component';
  name: string;
  props: Record<string, unknown>;
  styles: Styles;
  children?: (Component | Section)[];
};

export type Section = {
  styles: Styles;
  children: (Component | Section)[];
  type: 'section';
};
