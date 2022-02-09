import React from 'react'
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

export const Seo = ({ title, description, image, article, lang}) => {

  Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
  }

  Seo.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
  }

  const { site } = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          defaultTitle: title
          titleTemplate: title
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername: twitterUsername
          keywords: keywords 
        }
      }
    }
  `)

  /*const query = graphql`
    query Seo {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate: titleTemplate
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername: twitterUsername
        }
      }
    }
  `*/

  const { pathname } = useLocation()
  //const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    keywords
  } = site.siteMetadata
      
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate} htmlAttributes={{lang}}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name='keywords' content={keywords} />
      <meta name="robots" content="index, follow"/>

      { seo.url && <meta property="og:url" content={seo.url} /> }
      {( article ? true : null) && <meta property="og:title" content="article" />}
      { seo.title && <meta property="og:title" content={seo.title} /> }  
      { seo.description && <meta property="og:description" content={seo.description} /> }
      { seo.image && <meta property="og:image" content={seo.image} /> }
      
      <meta name="twitter:card" content="summary_large_image"  />

      {twitterUsername && ( <meta name="twitter:creator" content={twitterUsername} /> )}
      {seo.description && <meta name="twitter:description" content={seo.description} /> }
      { seo.image && <meta name="twitter:image" content={seo.image} /> }

    </Helmet>
  )
}

