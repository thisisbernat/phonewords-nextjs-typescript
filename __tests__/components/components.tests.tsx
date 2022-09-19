import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import DigitsDisplay from '../../components/DigitsDisplay'
import PhoneScreen from '../../components/PhoneScreen'

describe('/components/DigitsDisplay', () => {
  it('should render content', () => {
    render(<DigitsDisplay digits='233' />)

    expect(screen.getByText('233')).toBeInTheDocument
  })
})

describe('/components/PhoneScreen', () => {
  const props = {
    message: 'kiwi is cool',
    isLoading: false,
    words: ['🥝'],
    updateScreen: (newWord: string) => { }
  }

  it('should render content', () => {
    render(<PhoneScreen {...props} />)

    expect(screen.getByText('kiwi is cool')).toBeInTheDocument
    expect(screen.getByText('🥝')).toBeInTheDocument
  })

  it('should render loader',
    () => {
      props.isLoading = true
      const { container } = render(<PhoneScreen {...props} />)

      const loader = container.querySelector('[data-test="loader"]')

      expect(container).not.toHaveTextContent('🥝')
      expect(loader).toBeTruthy()
    }
  )
})