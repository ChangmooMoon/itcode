import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppTemplate from 'components/base/AppTemplate'
import Header from 'components/base/Header'
import { MainPage, CoursesPage, DetailPage} from 'pages'

const App = () => {
  return (
    <AppTemplate header={<Header right='오른쪽' />}>
      <Route exact path='/' component={MainPage} />
      <Switch>
        <Route path='/courses/:id/edit' component={DetailPage} />
        <Route path='/courses/:id' component={DetailPage} />
        <Route exact path='/courses' component={CoursesPage} />
      </Switch>
    </AppTemplate>
  )
}

export default App