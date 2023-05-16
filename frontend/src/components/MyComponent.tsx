import { connect, useDispatch } from 'react-redux';
import { RootState } from '../reducers/rootReducer';

interface MyComponentProps {
  accessToken: string | null;
}

function MyComponent(props: MyComponentProps) {
  return (
    <div>
      <p>Access token: {props.accessToken}</p>
      ...
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  accessToken: state.auth.accessToken
});

export default connect(mapStateToProps)(MyComponent);