import React from "react"
import ContentLoader from "react-content-loader"

const LoaderSec = () => (
    <ContentLoader 
    speed={3}
    width={750}
    height={300}
    viewBox="0 0 750 300"
    backgroundColor="#d4d4d4"
    foregroundColor="#ecebeb"
  >
    <rect x="161" y="214" rx="0" ry="0" width="1" height="0" /> 
    <rect x="58" y="274" rx="0" ry="0" width="0" height="2" /> 
    <rect x="0" y="0" rx="20" ry="20" width="750" height="300" />
  </ContentLoader>
)

export default LoaderSec