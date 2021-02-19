import { connect } from 'react-redux'
import { augmenter, diminuer } from '../../redux/action/actionCreatorCounter'

function ReduxCounter( { counter, augmenter, diminuer } ){

    function handleDiminuer() {
        diminuer();
    }
    function handleAugmenter() {
        augmenter();
    }
    return(
        <div>
            <button onClick={handleDiminuer}>Diminuer</button>
            <span style={ {margin: "0 10px"}}> { counter }</span>
            <button onClick={handleAugmenter}>Augmenter</button>
        </div>
    )
}
// recupere la valeur de counter du store
const mapStateToProps = (state, props) => {
    return { counter: state.counter}
};

const mapDispatchProps = { diminuer, augmenter };

 /* const mapDispatchProps = (dispatch) => {
    return {
        augmenter: () => {dispatch(augmenter())},
        diminuer: () => {dispatch(diminuer())}
    }
}
  */

export default connect(mapStateToProps, mapDispatchProps)(ReduxCounter);