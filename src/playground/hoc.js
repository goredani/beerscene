import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Belepes</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             { props.isAdmin && <p>This is private info, please dont share</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div> 
            {props.isAuthenticated && <p>Szevasz fonok</p>}
            <WrappedComponent {...props} />
        </div>
    )
}



// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Helo Feketelo" />, document.getElementById('app'));



