import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import TeamIcon from '../../../../assets/images/Check.png'

export const Container = styled(Flex)`
  width: 100%;
  height: 342px;
  padding: 90px 180px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`
export const Graphic = styled.img.attrs({
  src: TeamIcon
})`
  width: 342px;
  height: 199px;
`
export const TextContainer = styled(Flex)`
  flex-direction: column;
  max-width: 422px;
`
export const Header = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.font.primary};
`
export const Body = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.font.primary};
  margin-top: 23px;
`
