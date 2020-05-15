import React from "react";
import ReactTable from "react-table-v6";
import axios from "axios";
import { fetchComments } from "./ServiceCalls";
import "./react-table.css";

class FeedRows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildData: [],
      errorStatus: ""
    };
  }
  componentDidMount() {
    this.fetchExistingCards = () => {
      axios
        .get("https://hn.algolia.com/api/v1/search_by_date?tags=story")
        .then((res) => {
          this.setState({
            buildData: res.data.hits,
          });
        });
    };

    this.fetchExistingCards();
  }
  render() {
    const columns = [
      {
        accessor: "points",
        width: "200px",
      },
      {
        accessor: "title",
      },
      {
        accessor: "author",
        Cell: (props) => <span className="number"> by {props.value}</span>,
      },
      {
        accessor: "created_at",
        Cell: (props) => (
          <span className="number"> created at {props.value}</span>
        ),
      },
    ];
    return (
      <div className="feedRows">
        <ReactTable
          data={this.state.buildData}
          columns={columns}
          className="-highlight -striped"
          defaultPageSize={5}
        />
      </div>
    );
  }
}

export { FeedRows };
