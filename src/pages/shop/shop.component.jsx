import React from 'react';
import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// because i need to store the data related to the actual collections on my shop page
class ShopPage extends React.Component {
    // gives access to the state
    constructor(props) {
        super(props);
        
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({ id, otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>);
    }
}

export default ShopPage;