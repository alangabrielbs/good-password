import { Story, Meta } from '@storybook/react'
import Hero from '.'

export default {
  title: 'Hero',
  component: Hero
} as Meta

export const Default: Story = () => <Hero />
