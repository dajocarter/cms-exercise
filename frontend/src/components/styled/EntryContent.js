import styled from 'styled-components'

const EntryContent = styled.div`
  .embed-container {
    position: relative;
    margin-bottom: 1.5rem;
    padding-bottom: 56.25%;
    overflow: hidden;
    max-width: 100%;
    height: auto;

    .giphy-embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default EntryContent
