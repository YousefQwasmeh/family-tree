import React from "react";
import axios from "axios";

class Tree extends React.Component {
  state = {
    tree: {},
    person: { id: 17, name: "loading..." },
    maxWidth: 0
  };
  componentDidMount() {
    this.getPerson(17);
    axios(`/api/tree/${this.state.person.id}`).then(({ data }) => {
      this.setState({ tree: data }, () => {
        setTimeout(() => {
          const big = document.getElementsByClassName(`${this.state.person.id}`)
            ? document.getElementsByClassName(`${this.state.person.id}`)[0]
            : null;
          this.setState({
            maxWidth: big && big.clientWidth ? big.clientWidth : 0
          });
        }, 100);
      });
    });
  }
  getPerson = personId => {
    axios(`/api/person/${personId}`)
      .then(({ data }) => this.setState({ person: data[0] }))
      .catch(err => {
        console.log(err);
      });
  };
  getTree = rootId => {
    return (
      <div className={"div " + rootId}>
        {this.state.tree[rootId]
          ? this.state.tree[rootId].map(person => {
              return (
                <section>
                  <h5>{person.name}</h5>
                  {this.getTree(person.id)}
                </section>
              );
            })
          : null}
      </div>
    );
  };
  render() {
    return (
      <>
        {/* <input type='text' /> */}
        <h5 style={{ width: this.state.maxWidth || "auto" }}>
          {this.state.person.name}
        </h5>
        {this.getTree(this.state.person.id)}
      </>
    );
  }
}

export default Tree;
