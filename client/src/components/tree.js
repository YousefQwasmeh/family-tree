import React from "react";
import axios from "axios";

class Tree extends React.Component {
  state = {
    tree: {},
    person: { id: 0, name: "loading..." },
    maxWidth: 0
  };
  componentDidMount() {
    this.getPerson(17);
    this.getTree(17);
  }
  getTree = rootId => {
    axios(`/api/tree/${rootId}`).then(({ data }) => {
      this.setState({ tree: data }, () => {
        const big = document.getElementsByClassName(`${rootId}`)
          ? document.getElementsByClassName(`${rootId}`)[0]
          : null;
        this.setState({
          maxWidth: big && big.clientWidth ? big.clientWidth : 0
        });
      });
    });
  };
  getPerson = personId => {
    axios(`/api/person/${personId}`)
      .then(({ data }) => this.setState({ person: data[0] }))
      .catch(err => {
        console.log(err);
      });
  };
  getParent = childId => {
    axios(`/api/parent/${childId}`)
      .then(({ data }) => {
        if (data[0])
          this.setState({ person: data[0] }, () => {
            const big = document.getElementsByClassName(
              `${this.state.person.id}`
            )
              ? document.getElementsByClassName(`${this.state.person.id}`)[0]
              : null;
            this.setState({
              maxWidth: big && big.clientWidth ? big.clientWidth : 0
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
  drawTree = rootId => {
    return (
      <div className={"div " + rootId}>
        {this.state.tree[rootId]
          ? this.state.tree[rootId].map((person, i) => {
              return (
                <section>
                  <div className='vertical-line'></div>
                  <h5
                    onClick={() => {
                      this.setState({ person }, () => {
                        const big = document.getElementsByClassName(
                          `${person.id}`
                        )
                          ? document.getElementsByClassName(`${person.id}`)[0]
                          : null;
                        this.setState({
                          maxWidth: big && big.clientWidth ? big.clientWidth : 0
                        });
                      });
                    }}
                  >
                    <img
                      style={{ margin: "auto", width: "80px" }}
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnOWfz4ywhOGvfOZ7TbMk3W1Bmcdt9cV-hD5XULcQYNBoiY-v-&usqp=CAU'
                    />
                    <p>{person.name}</p>
                  </h5>
                  {this.state.tree[person.id].length > 1 ? (
                    <div className='vertical-line'></div>
                  ) : null}
                  {this.state.tree[person.id].length > 1 ? (
                    <div className='horizontal-line'></div>
                  ) : null}

                  {this.drawTree(person.id)}
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
        <h5
          className='level-up'
          onClick={() => {
            this.getParent(this.state.person.id);
          }}
        >
          lєvєl up⇪
        </h5>
        <h5>
          <img
            style={{ margin: "auto", width: "80px" }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnOWfz4ywhOGvfOZ7TbMk3W1Bmcdt9cV-hD5XULcQYNBoiY-v-&usqp=CAU'
          />
          <p>{this.state.person.name}</p>
        </h5>
        {this.state.tree[this.state.person.id] &&
        this.state.tree[this.state.person.id].length > 1 ? (
          <div className='vertical-line'></div>
        ) : null}
        {this.state.tree[this.state.person.id] &&
        this.state.tree[this.state.person.id].length > 1 ? (
          <div className='horizontal-line'></div>
        ) : null}
        {this.drawTree(this.state.person.id)}
      </>
    );
  }
}

export default Tree;
