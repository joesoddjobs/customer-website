import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import ListIcon from '../../../../assets/images/ListIcon.png'

export const Container = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 415px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`
export const GraphicContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 247px;
  background-color: #cccccc;
`
export const ListGraphic = styled.img.attrs({
  src: ListIcon
})`
  width: 231px;
  height: 147px;
`
export const ExplanationContainer = styled(Flex)`
  flex-direction: column;
  width: 767px;
  height: 247px;
  padding: 0px 70px 0px 70px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  align-items: center;
  justify-content: center;
`
export const ExplanationHeader = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 48px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 56px;
  text-align: center;
`
export const ExplanationBody = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 21px;
  text-align: center;
  margin-top: 10px;
`
