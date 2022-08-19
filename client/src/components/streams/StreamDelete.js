import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

import Modal from "../Modal";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions = () => {
    return (
      <>
        <button className="ui button primary" onClick={this.onSubmit}>
          Delete
        </button>
        <button
          className="ui button negative"
          onClick={() => history.push("/")}
        >
          Cancel
        </button>
      </>
    );
  };

  render() {
    if (!this.props.stream) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <>
          <Modal
            title={`Delete Stream "${this.props.stream.title}"`}
            content="Are you sure you want to delete this stream?"
            actions={this.renderActions()}
            onDismiss={() => history.push("/")}
          />
        </>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
