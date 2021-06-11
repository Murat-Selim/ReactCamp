import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import productDetail from '../pages/productDetail'
import cartDetail from '../pages/cartDetail'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                       <Categories/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                       <Route exact path="/" component={ProductList} />
                       <Route exact path="/products" component={ProductList} />
                       <Route path="/products/:name" component={productDetail} />
                       <Route path="/cart" component={cartDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
