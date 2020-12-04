import * as S from './styled'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo dentro de um hexágono."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
