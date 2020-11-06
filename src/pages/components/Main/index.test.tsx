import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/', () => {
  it('Deve renderizar o heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /rodrigo oliveira js/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
