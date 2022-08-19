import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";

import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <h1>Edit - {this.props.stream.title}</h1>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={_.pick(this.props.stream, "title", "description")}
            // initialValues={{
            //   title: this.props.stream.title,
            //   description: this.props.stream.description,
            // }}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
