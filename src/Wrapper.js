import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";

function withWrapper(WrappedComponent) {
  return function Wrapper(props) {
    return (
        <div className="App">
            <LeftNav />
            <div className='main'>
                <WrappedComponent {...props} />
            </div>
            <RightNav />
        </div>
    );
  };
}

export default withWrapper;