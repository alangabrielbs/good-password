import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import NewPassword from 'components/NewPasswordIcon'
import Copy from 'components/CopyIcon'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    min-height: 100%;
    background: ${theme.colors.backgroundDark};
    color: ${theme.colors.primaryText};

    display: grid;
    place-items: center;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.heading.large};
    max-width: 80rem;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.heading.xxlarge};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.content.xlarge};
    max-width: 70rem;
  `}
`

export const WrapperInput = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.xxsmall};
    max-width: 60rem;
    position: relative;
  `}
`

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;
    background: #130e17;
    padding-left: 0.6rem;

    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxxsmall};
  `}
`

export const ButtonNewPassword = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      transition: transform ${theme.transition.fast};
      transform-origin: center;
      width: 2.5rem;
      height: 2.5rem;
    }

    :hover svg {
      transform: scale(1.2);
    }
  `}
`

export const NewPasswordIcon = styled(NewPassword)``

export const CopyIcon = styled(Copy)``

type BalloonProps = {
  isOpen: boolean
}

const ballonModifier = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Balloon = styled.span<BalloonProps>`
  ${({ theme, isOpen }) => css`
    display: inline-block;
    padding: 0.6rem 1rem;
    background: ${theme.colors.backgroundDark};
    border: 0.1rem solid ${theme.colors.primaryText};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    white-space: nowrap;

    position: absolute;
    top: -3.5em;
    right: -1.7rem;

    transition: opacity ${theme.transition.default};

    ${isOpen && ballonModifier.open()}
    ${!isOpen && ballonModifier.close()}
  `}
`
