import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import Hammer from '../../../../assets/images/HammerWhite.png'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-left: 12.5%;
  padding-right: 12.5%;
  padding-bottom: 20px;
  padding-top: 20px;
`

export const Graphic = styled.img.attrs({
  src: Hammer
})`
  width: 70px;
  height: 70px;
  padding: 10px;
`

export const Body = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.primary};
  line-height: 25px;
  text-align: center;
`
