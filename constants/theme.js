import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  border: "var(--bs-card-border-width) solid var(--bs-card-border-color)"
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  border: "1px solid #FFFF"
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.2s linear;
  }

  .card{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.border};
  }
`