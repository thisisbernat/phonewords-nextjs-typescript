import { useEmulator } from '../../hooks/useEmulator'
import { act, renderHook } from '@testing-library/react'


describe('/hooks/useEmulator custom hook', () => {
  it('should update the digits display', () => {
    const { result } = renderHook(() => useEmulator())

    act(() => result.current.updateDisplay('5494'))
    expect(result.current.digits).toEqual('5494')

    act(() => result.current.updateDisplay('8'))
    expect(result.current.digits).toEqual('54948')
  })

  it('should update the screen', () => {
    const { result } = renderHook(() => useEmulator())

    act(() => result.current.updateScreen('typescript'))
    expect(result.current.message).toEqual('typescript')
    expect(result.current.digits).toEqual('')

    act(() => result.current.updateScreen('next'))
    expect(result.current.message).toEqual('typescript next')
    expect(result.current.digits).toEqual('')
  })

  it('should clear data correctly', () => {
    const { result } = renderHook(() => useEmulator())
    act(() => result.current.clearData())
    expect(result.current.message).toEqual('')
    expect(result.current.digits).toEqual('')
  })

  it('should delete text correctly', () => {
    const { result } = renderHook(() => useEmulator())
    act(() => result.current.updateScreen('typescript'))
    expect(result.current.message).toEqual('typescript')

    act(() => result.current.updateScreen('next'))
    expect(result.current.message).toEqual('typescript next')

    act(() => result.current.updateDisplay('23'))
    expect(result.current.digits).toEqual('23')
    expect(result.current.message).toEqual('typescript next')

    act(() => result.current.backspace())
    expect(result.current.digits).toEqual('2')
    expect(result.current.message).toEqual('typescript next')

    act(() => result.current.backspace())
    expect(result.current.digits).toEqual('')
    expect(result.current.message).toEqual('typescript next')

    act(() => result.current.backspace())
    expect(result.current.digits).toEqual('')
    expect(result.current.message).toEqual('typescript')

    act(() => result.current.backspace())
    expect(result.current.digits).toEqual('')
    expect(result.current.message).toEqual('')
  })
})