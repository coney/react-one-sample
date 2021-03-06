import { connect } from 'react-redux';
import View from './components/View';

const mapStateToProps = ({ isAuthenticated }) => ({
  logged: isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => dispatch({type: 'LOGIN', isSucceed: true})
});

export default connect(mapStateToProps, mapDispatchToProps)(View);