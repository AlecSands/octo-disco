import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Project/Button',
  component: ButtonComponent,
} as Meta;

export const Primary: Story = () => ({
  props: {
    text: 'Button',
    primary: true,
  },
});
