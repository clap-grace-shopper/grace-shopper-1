import React from 'react'
import {Columns, Heading} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <br />
      <Columns align="center">
        <Columns.Column>
          <Heading> Uh! Oh! This place is desserted !!</Heading>
          <Columns.Column>
            <img src="https://cdn.dribbble.com/users/148680/screenshots/2456439/desserted.jpg" />
            <br />

            <Link to="/cakes">Go Back to Cakes!!</Link>
          </Columns.Column>
        </Columns.Column>
      </Columns>
    </div>
  )
}
