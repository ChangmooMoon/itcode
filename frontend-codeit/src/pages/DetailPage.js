import React, { Fragment } from 'react'
import DetailContainer from 'Containers/DetailContainer'

const DetailPage = ({ match }) => {
  return (
    <Fragment>
      detail page no.{ match.params.id }
      <DetailContainer />
    </Fragment>
  )
}

export default DetailPage