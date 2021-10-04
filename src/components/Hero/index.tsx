import { useEffect, useState, useRef } from 'react'
import usePassword from 'hooks/usePassword'

import * as S from './styles'
import { Container } from 'components/Container'
import TextField from 'components/TextField'

export type HeroProps = {
  title?: string
  description?: string
}

const Hero = ({
  description = 'Gere senha memoráveis, porém seguras, que são mais fáceis de lembrar do que uma string aleatória.',
  title = 'Gere frases-senhas seguras e memoraveis.'
}: HeroProps) => {
  const { words, numbers, generatePassword } = usePassword(4)
  const [isOpen, setIsOpen] = useState(false)
  const inputCopy = useRef<HTMLInputElement>(null)

  const handleGeneratePassword = () => {
    setIsOpen(false)
    generatePassword()
  }

  const handleCopyToClipboard = () => {
    // eslint-disable-next-line prefer-const
    let timeout

    inputCopy.current?.select()
    document.execCommand('copy')

    setIsOpen(true)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      setIsOpen(false)
    }, 5 * 1000)
  }

  useEffect(() => {
    handleGeneratePassword()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Wrapper>
      <Container>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.WrapperInput>
          <TextField
            ref={inputCopy}
            tabIndex={-1}
            type="text"
            readOnly
            value={`${words}-${numbers}`}
          />
          <S.WrapperButton>
            <S.ButtonNewPassword onClick={handleGeneratePassword}>
              <S.NewPasswordIcon />
            </S.ButtonNewPassword>
            <S.ButtonNewPassword onClick={handleCopyToClipboard}>
              <S.CopyIcon />
              <S.Balloon isOpen={isOpen}>Copiado com sucesso</S.Balloon>
            </S.ButtonNewPassword>
          </S.WrapperButton>
        </S.WrapperInput>
      </Container>
    </S.Wrapper>
  )
}

export default Hero
