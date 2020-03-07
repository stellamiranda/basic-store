import React, {Fragment} from 'react';

class StorePicker extends React.Component {
  render(){
    return (
      <Fragment>
        <form className="store-selector">
          <h2>Please Enter A Store</h2>
          <input type="text" required placeholder="Store Name"></input>
          <button type="submit">Visit Store</button>
        </form>
        { /* Comment */}
      </Fragment>
    );
  }
}

export default StorePicker;