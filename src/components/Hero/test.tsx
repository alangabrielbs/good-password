import { render, screen } from 'utils/test-utils'

import Hero from '.'

describe('<Hero />', () => {
  it('should render the heading and description', () => {
    render(<Hero title="Hero" description="description" />)

    expect(screen.getByRole('heading', { name: /Hero/i })).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
  })
})
