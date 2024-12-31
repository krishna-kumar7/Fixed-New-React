import * as React from "react";
class MyPropList extends React.Component {
    render() {
        const {itms} = this.props;
        return (
            <ul>
                {itms.map((i) => (
            <li key={i}>{i}</li>

              ))}
            </ul>
        );
    }
}
export default MyPropList;