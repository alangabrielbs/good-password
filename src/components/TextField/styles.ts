import styled, { css } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type InputWrapperProps = { hasIcon: boolean } & IconPositionProps

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, iconPosition, hasIcon }) => css`
    display: flex;
    align-items: center;
    background: #130e17;
    border-radius: ${theme.border.radius};
    border: 0.1rem solid #241a2d;

    ${hasIcon &&
    css`
    padding-${iconPosition}: 1.8rem;
    `}

    &:focus-within {
      border: 1px solid ${theme.colors.primaryText};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.content.regular};
    padding: 1.2rem 1.8rem;
    color: ${theme.colors.white};
    -webkit-appearance: button;

    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.secondaryText};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.main}
        inset;
      filter: none;
      &::first-line {
        font-size: ${theme.font.content.regular};
      }
    }
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.secondaryText};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2rem;
      height: 100%;
    }
  `}
`
