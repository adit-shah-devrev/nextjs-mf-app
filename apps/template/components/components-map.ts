import { Button } from './button';
import { Text } from './text';

const ComponentsMap = {
  text: {
    Component: Text,
    // config: {
    //   content: {
    //     type: 'string',
    //     label: 'Content',
    //     required: true,
    //   },
    //   fonts: {
    //     type: 'enum',
    //     label: 'Font',
    //     defaultValue: 'Arial',
    //     options: ['Arial', 'Times New Roman', 'Courier New'],
    //   },
    // },
  },
  button: {
    Component: Button,
    childrenType: 'function',
  },
};

export default ComponentsMap;
