import React from 'react'
import {Columns, Heading} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <br />
      <Columns align="center">
        <Columns.Column>
          <Heading> Sorry! You are not authorised to see this stuff!!</Heading>
          <Columns.Column>
            <img src="https://i.ytimg.com/vi/ClWkkDNNchM/maxresdefault.jpg" />
            <br />

            <Link to="/cakes">Go Back to Cakes!!</Link>
          </Columns.Column>
        </Columns.Column>
      </Columns>
    </div>
  )
}
