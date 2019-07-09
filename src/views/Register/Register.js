import React from 'react'
import { Card, CardContent, Grid, GridRow, GridColumn } from 'semantic-ui-react'

import { RegisterForm } from './components/RegisterForm'
import { Container } from './style'

export function Register() {
  return (
    <Container>
      <Grid centered columns={1}>
        <GridRow centered>
          <GridColumn computer={6}>
            <Card fluid>
              <CardContent header="Register" />
              <CardContent description={<RegisterForm />} />
            </Card>
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  )
}
